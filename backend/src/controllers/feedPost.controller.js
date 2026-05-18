const FeedPost =
    require("../models/feedPost.model");

const Connection =
    require("../models/connection.model");

const User =
    require("../models/user.model");

const EmployeeProfile =
    require("../models/employeeProfile.model");

const EmployerProfile =
    require("../models/employerProfile.model");

const uploadFile =
    require("../services/storage.service");



async function createPost(
    req,
    res
) {

    try {

        const userId =
            req.user.id;

        let imageUrl = "";

        if (req.file) {

            const file =
                req.file;

            const result =
                await uploadFile(

                    file.buffer,

                    file.originalname,

                    "/samarthya/feed-posts"

                );

            imageUrl =
                result.url;

        }

        const newPost =
            await FeedPost.create({

                author: userId,

                text: req.body.text,

                image: imageUrl

            });

        const populatedPost =
            await FeedPost.findById(
                newPost._id
            )

                .populate(
                    "author",
                    "name profileImage role"
                );


        res.status(201).json({

            message:
                "Post created",

            post:
                populatedPost

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message:
                "Server error"

        });

    }

}



async function getFeed(
    req,
    res
) {

    try {

        const userId =
            req.user.id;


        // accepted connections

        const connections =
            await Connection.find({

                status: "accepted",

                $or: [

                    {
                        senderId: userId
                    },

                    {
                        receiverId: userId
                    }

                ]

            });


        // extract actual connected ids

        const connectedUserIds =

            connections.map(

                (c) => {

                    return c.senderId.toString() === userId

                        ?

                        c.receiverId

                        :

                        c.senderId

                }

            );


        // connected posts first

        let feedPosts =

            await FeedPost.find({

                author: {

                    $in: [

                        ...connectedUserIds,

                        userId
                    ]

                }

            })

                .populate(

                    "author",

                    "name role profileImage"

                )

                .populate(
                    "comments.user",
                    "name profileImage"
                )

                .sort({

                    createdAt: -1

                });



        // if feed small,
        // fill with public recommendations

        if (feedPosts.length < 10) {

            const extraPosts =

                await FeedPost.find({

                    author: {

                        $nin: [

                            ...connectedUserIds,

                            userId

                        ]

                    }

                })

                    .populate(

                        "author",

                        "name role profileImage"

                    )

                    .populate(
                        "comments.user",
                        "name profileImage"
                    )

                    .sort({

                        createdAt: -1

                    })

                    .limit(

                        10 - feedPosts.length

                    );


            feedPosts = [

                ...feedPosts,

                ...extraPosts

            ];

        }



        res.json({

            posts:
                feedPosts

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message:
                "Server error"

        });

    }

}



async function getUserPosts(
    req,
    res
) {

    try {

        const posts =

            await FeedPost.find({

                author:
                    req.params.userId

            })

                .populate(

                    "author",

                    "name profileImage role"

                )

                .populate(
                    "comments.user",
                    "name profileImage"
                )

                .sort({

                    createdAt: -1

                });


        res.json({

            posts

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message:
                "Server error"

        });

    }

}

async function toggleLike(
    req,
    res
) {

    try {

        const userId =
            req.user.id;

        const postId =
            req.params.id;

        const post =
            await FeedPost.findById(
                postId
            );

        if (!post) {

            return res
                .status(404)
                .json({

                    message:
                        "Post not found"

                });

        }


        const alreadyLiked =

            post.likes.includes(
                userId
            );


        if (alreadyLiked) {

            post.likes =

                post.likes.filter(

                    id =>

                        id.toString()

                        !==

                        userId

                );

        }

        else {

            post.likes.push(
                userId
            );

        }


        await post.save();


        res.json({

            likes:
                post.likes.length

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message:
                "Server error"

        });

    }

}

async function deletePost(
    req,
    res
) {

    try {

        const postId =
            req.params.id;

        const userId =
            req.user.id;


        const post =
            await FeedPost.findById(
                postId
            );

        if (!post) {

            return res
                .status(404)
                .json({

                    message:
                        "Post not found"

                });

        }


        if (

            post.author.toString()

            !==

            userId

        ) {

            return res
                .status(403)
                .json({

                    message:
                        "Unauthorized"

                });

        }


        await FeedPost.findByIdAndDelete(
            postId
        );


        res.json({

            message:
                "Post deleted"

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message:
                "Server error"

        });

    }

}


async function updatePost(req, res) {

    try {

        const userId = req.user.id;

        const post =
            await FeedPost.findById(
                req.params.postId
            );

        if (
            post.author.toString()
            !== userId
        ) {

            return res.status(403)
                .json({
                    message: "Unauthorized"
                });

        }

        post.text = req.body.text;

        await post.save();

        res.json({

            message:
                "Post updated",

            post

        });

    }

    catch (err) {

        res.status(500).json({

            message:
                "Server error"

        });

    }

}



async function addComment(
    req,
    res
) {

    try {

        const userId =
            req.user.id;

        const {
            text
        } = req.body;

        const post =

            await FeedPost.findById(
                req.params.postId
            );

        post.comments.push({

            user: userId,

            text

        });

        await post.save();

        const updatedPost =

            await FeedPost.findById(
                req.params.postId
            )

                .populate(

                    "comments.user",

                    "name profileImage"

                );

        res.json({

            message:
                "Comment added",

            post:
                updatedPost

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message:
                "Server error"

        });

    }

}


async function getSinglePost(
    req,
    res
){

    try{

        const post =

        await FeedPost
        .findById(
            req.params.postId
        )

        .populate(
            "author",
            "name profileImage role"
        );

        if(!post){

            return res
            .status(404)
            .json({

                message:
                "Post not found"

            });

        }

        res.json(post);

    }

    catch(err){

        console.log(err);

        res.status(500)
        .json({

            message:
            "Server error"

        });

    }

}



module.exports = {

    createPost,

    getFeed,

    getUserPosts,

    toggleLike,

    deletePost,

    updatePost,

    addComment,

    getSinglePost
};
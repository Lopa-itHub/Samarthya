const express =
    require("express");

const router =
    express.Router();

const multer =
    require("multer");

const authMiddleware =
    require("../middlewares/auth.middleware");

const {

    createPost,
    getFeed,
    getUserPosts,
    toggleLike,
    deletePost,
    updatePost,
    addComment,
    getSinglePost

} = require(

    "../controllers/feedPost.controller"

);


const upload = multer({

    storage:
        multer.memoryStorage()

});



router.post(

    "/create",

    authMiddleware,

    upload.single(
        "image"
    ),

    createPost

);


router.get(

    "/feed",

    authMiddleware,

    getFeed

);

router.get(
    "/user/:userId",
    authMiddleware,
    getUserPosts
);


router.put(

    "/like/:id",

    authMiddleware,

    toggleLike

);

router.delete(
    "/:id",
    authMiddleware,
    deletePost
);


router.put(

    "/:postId",

    authMiddleware,

    updatePost

);


router.put(

    "/comment/:postId",

    authMiddleware,

    addComment

);


router.get(
    "/post/:postId",
    authMiddleware,
    getSinglePost
);



module.exports =
    router;
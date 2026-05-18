import React,
{
    useEffect,
    useState,
}
    from "react";

import axios
    from "axios";

import {
    useParams,
    useNavigate
}
    from "react-router-dom";

import {
    FiArrowLeft
}
    from "react-icons/fi";

import PostCard
    from "./PostCard";


const SinglePostPage = () => {

    const navigate = useNavigate();

    const {

        postId

    } = useParams();


    const [

        post,

        setPost

    ] = useState(
        null
    );


    useEffect(() => {

        fetchPost();

    }, []);



    const fetchPost =
        async () => {

            try {

                const token =

                    localStorage.getItem(
                        "token"
                    );

                const res =

                    await axios.get(

                        `http://localhost:3000/api/feed-posts/post/${postId}`,

                        {

                            headers: {

                                Authorization:
                                    `Bearer ${token}`

                            }

                        }

                    );

                setPost(
                    res.data
                );

            }

            catch (err) {

                console.log(err);

            }

        };


    if (!post) {

        return (

            <div>

                Loading...

            </div>

        )

    }


    return (

        <div
            className="
    max-w-3xl
    mx-auto
    py-6
    "
        >

            <button

                onClick={() =>
                    navigate(-1)
                }

                className="
            flex
            items-center
            gap-2
            mb-4
            text-gray-600
            hover:text-cyan-600
            font-medium
            "
            >

                <FiArrowLeft />

                Back

            </button>

            <PostCard

                post={
                    post
                }

                fetchFeed={
                    fetchPost
                }

            />

        </div>

    );

};

export default SinglePostPage;
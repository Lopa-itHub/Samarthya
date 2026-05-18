import React
from "react";

import PostCard
from "./PostCard";


const FeedList = ({

    posts,

    fetchFeed

}) => {

    return (

        <div
        className="
        space-y-4
        "
        >

            {

                posts.map(

                    (post)=>(

                        <PostCard

                            key={
                                post._id
                            }

                            post={
                                post
                            }

                            fetchFeed={
                                fetchFeed
                            }

                        />

                    )

                )

            }

        </div>

    );

};

export default FeedList;
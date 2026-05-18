import React,
{
    useState
}
    from "react";

import axios
    from "axios";

import {
    FiImage
}
    from "react-icons/fi";

import {
    toast
}
    from "react-toastify";


const CreatePost = ({

    fetchFeed,
    setActiveTab

}) => {

    const [text, setText] = useState("");


    const [

        image,

        setImage

    ] = useState(null);


    const handleSubmit =
        async () => {

            try {

                if (
                    !text.trim()
                    &&
                    !image
                ) {
                    return;
                }


                const token =

                    localStorage.getItem(
                        "token"
                    );


                const formData =

                    new FormData();


                formData.append(

                    "text",

                    text

                );


                if (image) {

                    formData.append(

                        "image",

                        image

                    );

                }


                await axios.post(

                    "http://localhost:3000/api/feed-posts/create",

                    formData,

                    {

                        headers: {

                            Authorization:
                                `Bearer ${token}`

                        }

                    }

                );


                setText("");

                setImage(null);

                fetchFeed();

                toast.success("Post published successfully", {
                    autoClose: 1000
                }

                );


                if (setActiveTab) {

                    setActiveTab(
                        "feed"
                    );

                }
            }

            catch (err) {

                console.log(err);

            }

        };



    return (

        <div
            className="
            bg-white
            shadow-md
            shadow-gray-300
            rounded-xl
            p-4
            "
        >

            <textarea

                value={text}

                onChange={

                    (e) =>

                        setText(
                            e.target.value
                        )

                }

                placeholder="
                What's on your mind?
                "

                className="
                w-full
                border
                rounded-lg
                p-3
                min-h-28
                outline-none
                "
            />


            {
                image && (

                    <img

                        src={
                            URL.createObjectURL(
                                image
                            )
                        }

                        alt="preview"

                        className="w-full max-h-72 object-contain rounded-xl mt-3 shadow-sm shadow-gray-300"

                    />

                )
            }



            <div
                className="
            flex
            justify-between
            items-center
            mt-3
            "
            >

                <label
                    className="
                cursor-pointer
                text-cyan-600
                "
                >

                    <FiImage
                        size={22}
                    />

                    <input

                        type="file"

                        hidden

                        onChange={(e) =>

                            setImage(
                                e.target.files[0]
                            )

                        }

                    />

                </label>



                <button

                    onClick={
                        handleSubmit
                    }

                    className="
                bg-cyan-600
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-cyan-700
                hover:cursor-pointer
                "

                >

                    Post

                </button>

            </div>

        </div>
    );

};

export default CreatePost
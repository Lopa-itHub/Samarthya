const mongoose = require("mongoose");

const feedPostSchema = new mongoose.Schema(

    {

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
        },

        text: {
            type: String,
            maxlength: 500
        },

        image: {
            type: String
        },

        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users"
            }
        ],

        edited: {
            type: Boolean,
            default: false
        },


        comments: [

            {

                user: {

                    type:
                        mongoose.Schema.Types.ObjectId,

                    ref: "users"

                },

                text: {

                    type: String,

                    required: true

                },

                createdAt: {

                    type: Date,

                    default: Date.now

                }

            }

        ]

    },

    {
        timestamps: true
    }

);



module.exports =
    mongoose.model(
        "FeedPost",
        feedPostSchema
    );
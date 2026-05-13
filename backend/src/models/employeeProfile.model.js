const mongoose = require("mongoose");

const employeeProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    phone: String,

    coverImage: String,

    category: String,

    jobType: String,

    experience: String,

    gender: String,

    location: String,

    openToWork: Boolean,

    about: String,

    skills: [String],

    languages: [String],

    certifications: [
        {
            title: String,
            fileUrl: String
        }
    ],

    professionalLinks: [
        {
            title: String,
            url: String
        }
    ],

},
    { timestamps: true }
)

const employeeProfilesModel = mongoose.model("employeeprofiles", employeeProfileSchema);

module.exports = employeeProfilesModel;
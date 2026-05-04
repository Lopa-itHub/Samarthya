const mongoose = require("mongoose");

const employeeProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    phone: String,
    coverImage: {
        type: String,
        default: "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    category: String,
    jobType: String,

    location: String,
    openToWork: Boolean,

    about: String,
    skills: [String]

}, 
{ timestamps: true}
)

const employeeProfilesModel = mongoose.model("employeeprofiles", employeeProfileSchema);

module.exports = employeeProfilesModel;
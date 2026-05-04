const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function addAdmin(req, res){
    try{
        const {name, email, password} = req.body;

        const userAlreadyExist = await userModel.findOne({email});

        if(userAlreadyExist){
            return res.status(409).json({
                message: "User already exist"
            })
        }

        const hash = await bcrypt.hash(password, 10);

        const newAdmin = await userModel.create({
            name, 
            email, 
            password: hash, 
            role: "admin"
        })

        res.status(201).json({
        message: "Admin added successfully",
        user: {
            id: newAdmin._id,
            name: newAdmin.name,
            email: newAdmin.email,
            role: newAdmin.role
        }
        });
    }
    catch(err){
        res.status(500).json({
        message: "Server error"
    });
    }
}

module.exports = addAdmin;
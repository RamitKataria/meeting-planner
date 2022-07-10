const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity")

const userSchema = new mongoose.Schema({
    userName:{type: String,required:true},
    email:{type: String,required:true},
    Password: {type: String,required:true}
})

userSchema.methods.generateAuthToken = ()=>{
    const token = jwt.sign({_id:this._id}, 70321,
        {
        expiresIn:"7d",
    });
    return token;
};

const Users = mongoose.model("Users", userSchema)

const validate = (data)=>{
    const schema = Joi.object({
        userName: Joi.string().required().label("UserName"),
        email: Joi.string().required().label("Email"),
        Password: passwordComplexity().required.label("Password")
    });

    return schema.validate(data);
};

module.exports = { Users, validate};

const express = require('express');
const router = express.Router();
const {Users} = require("./userSchema");
const bcrypt = require('bcryptjs');
const Joi = require("joi");

router.post("/", async(req,res)=>{
    try{
        const {error}  = loginValidate(req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const User = await Users.findOne({email:req.body.email});
        if(!User){
            return res.status(401).send({message: "Invalid Email"});
        }
        const validPassword = await bcrypt.compare(
            req.body.Password,
            User.Password
        );
        if(!validPassword){
            return res.status(401).send({message: "Invalid Password"});
        }

        const token = User.generateAuthToken();
        res.status(200).send({data: token, message:"login successfully"});
    }catch(error){
        res.status(500).send({message: "Internal Server Error"});
    }
});

const loginValidate = (data)=>{
    const schema = Joi.object({
        email:Joi.string().email().required().label("Email"),
        Password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
};

module.exports = router;
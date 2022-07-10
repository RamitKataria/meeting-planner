const express = require('express');
const router = express.Router();
const {Users, validate} = require("./userSchema");
const bcrypt = require('bcryptjs');


router.post('/', async(req,res)=>{
    try{
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const newUser = await Users.findOne({email:req.body.email});
        if (newUser){
            return res.status(409).send({message: "User with given email already Exist!"});
        }
        const salt = await bcrypt.genSalt(Number(10));
        const hashPassword = await bcrypt.hash(req.body.Password, salt);

        await new Users({...req.body, Password: hashPassword}).save();
        res.status(201).send({message: "User created successfully"});
    }catch (error){
        res.status(500).send({message: "Internal Server Error"});
    }
});

module.exports = router;


















const mongoose = require("mongoose");

module.exports=()=>{
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try{
        mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@maysandbox.tfe2sxh.mongodb.net/myFirstDatabase?appName=mongosh+1.5.0",
            connectionParams);
        console.log("Connected to database successfully");

    }catch(error){
        console.log(error);
        console.log("Could not connect to database!")
    }
}
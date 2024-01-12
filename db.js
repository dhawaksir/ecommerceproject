
const mongoose=require("mongoose");



const connectDB=async()=>{
    try{
        const uri="mongodb+srv://user:admin1234@cluster0.phznll6.mongodb.net/"
        await mongoose.connect(uri );
        console.log("mongodb is succesfully connected");
    }
    catch(err)  {
        console.error("connection faile",err);

    };
}
module.exports=connectDB;
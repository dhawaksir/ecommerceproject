const express = require("express");
const connectDB=require("./db");

const app=express();

connectDB();

app.listen(3000,()=>{
   console.log(" server is listening on 3000");
   
})


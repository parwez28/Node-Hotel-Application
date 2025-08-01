const express=require('express');
const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
        const mongoURL="mongodb://localhost:27017";
        const dbName="hotel";
       await mongoose.connect(`${mongoURL}/${dbName}`);
       console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.error('MongoDB Connection Failed:', error.message);
    process.exit(1);
    }
}

module.exports=connectDB;
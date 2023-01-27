const mongoose = require('mongoose');
const mongoURI =
  "mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const mongoURI = "mongodb+srv://sweety:Sweety@123@cluster0.gbkbvfz.mongodb.net/?retryWrites=true&w=majority";

  const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected");
    })
  }

  module.exports=connectToMongo
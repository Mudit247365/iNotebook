const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://guptmudit74d:18K2ekeVSXJXKD1y@cluster0.hodx8ae.mongodb.net/USERDB?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
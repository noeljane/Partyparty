const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    userSchema = new mongoose.Schema({
        name: { type: String },
        email: { type: String, required: true, unique: true }, 
        
    })
const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    userSchema = new mongoose.Schema({
        name: { type: String },
        email: { type: String, required: true, unique: true }, 

    })

    //Encrypts Your Password when it is generated
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    }

    //Checks to see if your password is correct
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    }

    //Middleware for changing password
    userSchema.pre('save', function(next) {
        if(this.isModified('password')){
            this.password = this.generateHash(this.password)
        }
        next()
    })

    const User = mongoose.model('User', userSchema)
    module.exports = User
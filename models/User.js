const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    userSchema = new mongoose.Schema({
        name: { type: String },
        email: { type: String, required: true, unique: true }, 
        invites:[{type: mongoose.Schema.Types.ObjectId, ref: 'Party'}], 
        parties: [{type: mongoose.Schema.Types.ObjectId, ref: 'Party'}],
        password: {type: String, required:true}
    })

    //Encrypts Your Password when it is generated
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    }

    //Checks to see if your password is correct
    userSchema.methods.validPassword = function(password) {
        console.log("Password field:", password)
        console.log("Hashed Password:", this.password)
        return bcrypt.compareSync(password, this.password)
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
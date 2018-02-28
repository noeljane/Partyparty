const 
    jwt = require('jsonwebtoken'),
    User = require('./models/User.js')

//function for creating tokens
function signToken(user){
    const userData = user.toObject()
    delete userData.password
    delete userData.invites
    delete userData.parties
    return jwt.sign(userData, process.env.JWT_SECRET)
}

// function for verifying tokens
function verifyToken(req,res, next) {
    //grab token from either headers, req.body, or query string
    const token = req.get('token') || req.body.token || req.query.token
    // if no token, deny access
    if(!token) return res.json({success: false, message: "No token provided"})
    //otherwise try to verify token 
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedData) => {
        if(err) return res.json({success: false, message: "Invalid token."})
        User.findById(decodedData._id, (err,user) =>{
            // if no user, deny access
            if(!user) return res.json({success: false, message: "Invalid token."})
            //otherwise, add user to req object
            req.user = user
            //Now, you have access to any user on any route that requires authentication
            // go on to process the route: 
            next()
        })
    })
} 

module.exports = {
    signToken, 
    verifyToken
}
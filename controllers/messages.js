const Message = require('../models/Message.js')

module.exports = {
    //list all messages
    index: (req,res) =>{
        Message.find({}, (err, messages) =>{
            if (err) console.log(err)
            res.json(messages)
        })
    },
    
   //Get one message
   show: (req, res) => {
       console.log("Current Message:")
       console.log(req.message)
       Message.findById(req.params.id, (err, message) => {
           if (err) console.log (err)
           res.json(message)
       })
   } ,

    //Create a new message
    create: (req, res) => {
    Message.create(req.body, (err, message)=> {
        if(err) return res.json({success: false, code: err.code})
        res.json({success:true, message: "Message created 😜"})

    })
        
    }, 
    
    //Edit a message
    update: (req, res) => {
        Message.findById(req.params.id, (err, message) => {
            Object.assign(message, req.body)
            message.save((err, updatedMessage) => {
                if(err) res.json({
                    success:false, code: err.code})
                res.json({success:true, message: "Message updated 🗣"})
            })
        })
    }, 

    //Delete a message
    destroy: (req, res) => {
        Message.findByIdAndRemove(req.params.id, (err, message) => {
            if(err) return res.json({success:false, code: err.code})
            res.json({success: true, message: "Oh snap! What did you say? Glad you deleted it "})
        })
    }

    
}
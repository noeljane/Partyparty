const Party = require('../models/Party.js')

module.exports = {
   
    //list all parties
    index: (req,res) =>{
        Party.find({}, (err,parties) => {
            if (err) console.log(err)
            res.json(parties)
        })
    },

    //create a new party
    create: (req, res) => {
        Party.create(req.body, (err,user) => {
            if(err) return res.json({success:false, code: err.code})
            res.json({success:true, message: "Party created!🎉"})
        })
    }
}
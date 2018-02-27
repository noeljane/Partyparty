const Party = require('../models/Party.js')

module.exports = {
   
    //list all parties
    index: (req, res) =>{
        Party.find({_by:req.user}, (err,parties) => {
            if (err) console.log(err)
            res.json(parties)
        })
    },

    //Get one party
    show: (req, res) =>{
        console.log("Current Party:")
        console.log(req.party)
        Party.findById(req.params.id, (err,party) => {
            if (err) console.log(err)
            res.json(party)
        })
    },

    //create a new party
    create: (req, res) => {
        Party.create({...req.body, _by: req.user}, (err, party) => {
            if(err) return res.json({success:false, code: err.code})
            res.json({success:true, message: "Party created!🎉", party: party})
        })
    }, 

    //update an existing party
    update: (req, res) => {
        Party.findById(req.params.id, (err, party) => {
            Object.assign(party, req.body)
            party.save((err, updatedParty) => {
                if(err) res.json({success:false, code: err.code})
                res.json({success:true, message: "Party upgraded!🎈" })
            })
        })

    },

    //delete an existing party
    destroy: (req, res) => {
        Party.findByIdAndRemove(req.params.id, (err,party) => {
            if(err) return res.json({success:false, code: err.code})
            res.json({success:true, message: "You're a party pooper 💩. Your party has been deleted", party})
        })
    }
}
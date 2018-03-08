const
    mongoose = require('mongoose')
    partySchema = new mongoose.Schema({
        title: {type: String, required: true}, 
        description: String, 
        location: String, 
        date: Date, 
        _by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
        invitees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    })

 const Party = mongoose.model('Party', partySchema)

 module.exports = Party
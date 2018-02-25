const
    mongoose = require('mongoose')
    messageSchema = new mongoose.Schema({
        text: {type: String, required: true}, 
        _by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
        _party: {type: mongoose.Schema.Types.ObjectId, ref: 'Party' }

    })

    const Message = mongoose.model('Message', messageSchema)

    module.exports = Message
//Parties includes the messages route
const
    express = require('express'),
    partiesRouter = new express.Router(),
    partiesCtrl = require('../controllers/parties.js')

    //messagesRouter = new express.Router(), 
    messagesCtrl = require('../controllers/messages.js')

partiesRouter.route('/')
    .get(partiesCtrl.index)
    .post(partiesCtrl.create)

partiesRouter.route('/:id')
    .get(partiesCtrl.show)
    .patch(partiesCtrl.update)
    .delete(partiesCtrl.destroy)


//Messages Routes
partiesRouter.route('/:id/messages')
    .get(messagesCtrl.index)
    .post(messagesCtrl.create)

partiesRouter.route('/:id/messages/:id')
    .get(messagesCtrl.show)
    .patch(messagesCtrl.update)
    .delete(messagesCtrl.destroy)
    

module.exports = partiesRouter
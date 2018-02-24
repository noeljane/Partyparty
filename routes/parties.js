const
    express = require('express'),
    partiesRouter = new express.Router(),
    partiesCtrl = require('../controllers/parties.js')

partiesRouter.route('/')
    .get(partiesCtrl.index)
    .post(partiesCtrl.create)

partiesRouter.route('/:id')
    .get(partiesCtrl.show)
    .patch(partiesCtrl.update)
    .delete(partiesCtrl.destroy)

module.exports = partiesRouter
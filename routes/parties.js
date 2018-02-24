const
    express = require('express'),
    partiesRouter = new express.Router(),
    partiesCtrl = require('../controllers/parties.js')

partiesRouter.route('/')
    .get(partiesCtrl.index)
    .post(partiesCtrl.create)

module.exports = partiesRouter
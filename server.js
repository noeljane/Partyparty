const
    dotenv = require('dotenv').load(),
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/partyParty',
    PORT = process.env.PORT || 3001, 
    usersRoutes = require('./routes/users.js')

//Connect MongoDB
mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || 'Connected to MongoDB')
})

//Use the client build folder
app.use(express.static(`${__dirname}/client/build`))

app.use(logger('dev'))
app.use(bodyParser.json())


//Root
app.get('/api', (req,res) => {
    res.json({message: "root"})
})

app.use('/api/users', usersRoutes)

//WildCard- Catches all random routes
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

//Server Listen
app.listen(PORT, (err) =>{
    console.log(err || `Server running on port ${PORT}.`)
})
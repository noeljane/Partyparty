var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 3001;

const
    dotenv = require('dotenv').load(),
    //express = require('express'),
    //app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/partyParty',
    //PORT = process.env.PORT || 3001,
    //http = require('http').Server(app),
    //io = require('socket.io')(http),
    usersRoutes = require('./routes/users.js')
    partiesRoutes = require('./routes/parties.js')

    

//Connect MongoDB
mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || 'Connected to MongoDB')
})

//Use the client build folder
app.use(express.static(`${__dirname}/client/build`))

//Middleware
app.use(logger('dev'))
app.use(bodyParser.json())


//Socket IO
io.on('connection', function(socket) {
    console.log('socket connected on the server!')
    socket.on('mmmbob', function(data){
        console.log(data)
        io.emit( 'letter-from-server', data )
    })
    
})
io.listen(8000)

//Root
app.get('/', (req,res) => {
    res.json({message: "root"})
})


//Users Routes
app.use('/api/users', usersRoutes)

//Party Routes
app.use('/api/parties', partiesRoutes)

// //Message Routes
// app.use('/messages', messagesRoutes)

//WildCard- Catches all random routes
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

//Server Listen
app.listen(PORT, (err) =>{
    console.log(err || `Server running on port ${PORT}.`)
})
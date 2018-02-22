const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose')
    PORT = process.env.PORT || 3001

//Use the client build folder
app.use(express.static(`${__dirname}/client/build`))

//Root
app.get('/api', (req,res) => {
    res.json({message: "root"})
})

//WildCard- Catches all random routes
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

//Server Listen
app.listen(PORT, (err) =>{
    console.log(err || `Server running on port ${PORT}.`)
})
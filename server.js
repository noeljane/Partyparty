const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3001

app.use(express.static(`${__dirname}/client/build`))

app.get('/api', (req,res) => {
    res.json({message: "root"})
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) =>{
    console.log(err || `Server running on port ${PORT}.`)
})
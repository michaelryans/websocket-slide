const express = require("express")
const app = express();
const http = require('http').createServer(app)

const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('new connection created')


    socket.on('socket-slide', (data) => {
        console.log('introduction event to slide picture')
        io.emit('socket-slide-now', data)
    })
})


app.get('/', (req,res) => {
    res.json('Hello World')
})

const PORT = 3000
http.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})
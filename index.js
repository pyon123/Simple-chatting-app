const   express = require('express'),
        app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

const server = app.listen(7000, function(){
    console.log("Espress's started on port 7000");
});

//-------- socket server -------------
const io = require('socket.io').listen(server);

io.sockets.on('connect', (socket, opt) => {  
    
    // socket.join('square');

    socket.on('message', (data) => {

        console.log(data);
        socket.broadcast.emit('message', {msg: data.msg});
    });
});
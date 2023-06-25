//ini buat servernya
//jadi express itu membuat web server buat ngambil request dan mengambalikan response
const express = require("express");


const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

io.on("connect", (socket) => { 
    console.log("user connected", socket.id);
});



app.use(express.static("public"));

//port 5000
httpServer.listen(5000);
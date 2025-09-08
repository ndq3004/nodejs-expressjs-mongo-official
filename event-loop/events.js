const EventEmiiter = require("events");
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');

process.title = "MyCustomServer";


const myEmiiter = new EventEmiiter();


myEmiiter.on('event1', () => {
    console.log('event1');
})


myEmiiter.on('event1', () => {
    console.log('event1 _ 1');
})

myEmiiter.emit('event1');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('request received');
    console.log(req.url)

    // solution 1:
    // fs.readFile('testfile.txt', (err, data) => {
    //     if (err) console.log(err);
    //     console.log("done reading file")
    //     res.end(data);
    // })

    // solution 2:
    // const readable = fs.createReadStream('testfile.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk)
    // })
    // readable.on('end', () => {
    //     res.end();
    // })

    // solution 3:
    const readable = fs.createReadStream('testfile.txt');
    readable.pipe(res);
})

server.on('close', () => {
    console.log('server closed')
})


server.listen(8000, "127.0.0.1", () => {
    console.log("waiting for request...")
})

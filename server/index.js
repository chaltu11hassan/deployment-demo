// npm init -y
// npm i express cors

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
});

// same as above = Users/chaltuhassan/Desktop/devmountain/6week/3day/deployment-demo/server/index.js

const port = process.env.PORT || 4005

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)})


const express = require ('express');
const cors = require('cors'); 
const dbOperation = require('./dbFiles/dbOperation');


/* const API_PORT = process.env.PORT || 5000;
const app  = express();

let client;
let session;
app.use(cors());

app.get('/api', function (req,res) {
    console.log('Called');
    res.send({result: 'Hello'})
})

app.get('/hello', function (req,res) {
    console.log('Called quit');
    res.send({result: 'Goodbye'})
})*/

dbOperation.getOrders().then(res => {
    console.log(res.recordset);
})




//app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
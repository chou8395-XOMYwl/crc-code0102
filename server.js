const express = require ('express');
const cors = require('cors'); 
const dbOperation = require('./dbFiles/dbOperation');
const Order = require('./dbFiles/order');

/*const API_PORT = process.env.PORT || 5000;
const app  = express();

let client;
let session;
app.use(cors());*/

app.post('/api', function (req,res) {
    console.log('Called');
    res.send({result: 'Hello'})
})

app.post('/hello', function (req,res) {
    console.log('Called quit');
    res.send({result: 'Goodbye'})
})

let Order28 = new Order(34, 2, 1, 4);

//console.log(Order28);
dbOperation.getOrders().then(res => {
    console.log(res.recordset);
});

dbOperation.createOrder(Order28);




//app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
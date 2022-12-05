const express = require ('express');
const cors = require('cors'); 
const dbOperation = require('./dbFiles/dbOperation');
const Order = require('./dbFiles/order');

const API_PORT = process.env.PORT || 5000;
const app  = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async(req,res) => {
    console.log('Called');
    const result = await dbOperation.getOrders(req.body.name);
    res.send(result.recordset)
});

app.post('/hello', async (req,res) => {
    await dbOperation.createOrder(req.body);
    const result = await dbOperation.getOrders(req.body.CustomerOrderId);
    console.log('Called quit');
    res.send(result.recordset)
})

let Order28 = new Order(48, 1, 4, 9);

//console.log(Order28);




app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
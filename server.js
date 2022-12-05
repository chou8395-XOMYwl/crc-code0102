const express = require ('express');
const cors = require('cors'); 

const API_PORT = process.env.PORT || 5000;
const app  = express();

app.use(cors());

app.get('/api', function (req,res) {
    console.log('Called');
    res.send({result: 'Hello'})
})

app.get('/quit', function (req,res) {
    console.log('Called quit');
    res.send({result: 'Goodbye'})
})


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
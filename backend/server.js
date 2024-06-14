const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost'
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());


const uri = 'mongodb+srv://nisal:91ngP213W8YI02ve@cluster0.rbko083.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('DB Connected');
    } catch (error) {
        console.log(error);
        
    }
};

connect();

const server = app.listen(port, host, () =>{
    console.log(`Node server listening on ${server.address().port}`);
});

app.use('/api', router);
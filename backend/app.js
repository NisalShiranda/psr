const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

//Password - 91ngP213W8YI02ve


//Middlewares
app.use(cors());

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

// app.get('/users', (req,res) => {
    
//     controller.getUsers(users => {
//         res.send(users);
//     });
// })

// app.get('/user', (req,res) => {
//     const id = req.query.id;
//     controller.getUserById(id, user => {
//         res.send(user);
//     })
// })

app.get('/users', (req,res) => {
    controller.getUsers((req,res,next) => {
        res.send();
    })
});

app.post('/createuser', (req,res) => {
    controller.addUser(req.body,() => {
        res.send();
    })
})

app.post('/updateuser', (req,res) => {
    controller.updateUser(req.body,(cb) => {
        res.send(cb);
    })
})

app.post('/deleteuser', (req,res) => {
    controller.deleteUser(req.body,(cb) => {
        res.send(cb);
    })
})







module.exports = app;
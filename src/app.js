
const express = require('express');
const app = express()


// Your code goes here
const Subscriber = require('./models/subscribers');

// GET http://localhost:3000/subscribers
app.get('/subscribers', (req, res) => {
    Subscriber.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})
// GET http://localhost:3000/subscribers/names
app.get('/subscribers/names', (req, res) => {
    Subscriber.find()
        .then((data) => {
            res.send(data.map(el => ({ name: el.name, subscribedChannel: el.subscribedChannel })))

        })

})

// GET http://localhost:3000/subscribers/:id
app.get('/subscribers/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params
    Subscriber.find({ _id: id })
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch((error) => {
            res.send({message: error.message})
        })
})




















module.exports = app;

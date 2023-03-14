
const express = require('express');
const app = express()


// Your code goes here
const subscribersData = require('./data')

// GET http://localhost:3000/subscribers
app.get('/subscribers', (req, res) => {
    res.send(subscribersData)
})

// GET http://localhost:3000/subscribers/names
app.get('/subscribers/names', (req, res) => {
    res.send(subscribersData)
})

// GET http://localhost:3000/subscribers/:id
app.get('/subscribers/:id', (req, res) => {
    const subscriber = subscribersData.find((sub) => sub.id === +req.params.id)
    res.send(subscriber)
})




















module.exports = app;

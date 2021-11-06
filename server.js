// @ts-nocheck
//  import npm packages
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

//  import js modules
const TodoModel = require('./models/todo.js')

// import route modules
const dbRoute = require('./routes/dbRoute.js')

// express setup
const app = express()
const PORT = process.env.PORT || 5500

// connect to mongo
mongoose.connect("mongodb+srv://user:user@cluster0.0lk24.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// middlewares

app.use('/', express.static(path.resolve(__dirname, 'public'))) // Static folder
app.use(express.json());    // Body parser

// network requests
// app.get('/', (req, res) => {
//     // res.send('root')
//     res.send('<h1>afasf</h1>')
// })

// routes
app.use('/api', dbRoute)


// PORT listener
app.listen(PORT, () => {
    console.log("server up & running at " + PORT);
})
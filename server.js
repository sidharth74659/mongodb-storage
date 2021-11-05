// @ts-nocheck
//  import npm packages
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

//  import js modules
const TodoModel = require('./models/todo.js')


const app = express()
const PORT = process.env.PORT || 5500

// connect to mongo
// mongoose.connect("mongodb://localhost:27017/name", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// middlewares
app.use('/', express.static(path.resolve(__dirname, 'public')))
app.use(express.json());


// network requests
app.get('/', (req, res) => {
    res.send('root')
})

app.post('/api/create', async (req, res) => {

    // await TodoModel.create()
})


// PORT listener
app.listen(PORT, () => {
    console.log("server up & running");
})
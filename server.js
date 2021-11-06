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
mongoose.connect("mongodb+srv://user:user@cluster0.0lk24.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// middlewares
app.use('/', express.static(path.resolve(__dirname, 'public')))
app.use(express.json());

// network requests
app.get('/', (req, res) => {
    res.send('root')
})

app.post('/api/create', async (req, res) => {
    let task = req.body
    console.log(task);

    res.send({ data: task, msg: "Success" })
    try {
        let response = await TodoModel.create(task)
        console.log(response);
    }
    catch (err) {
        console.log("err : ");
        console.log(err);
    }
})


// PORT listener
app.listen(PORT, () => {
    console.log("server up & running at " + PORT);
})
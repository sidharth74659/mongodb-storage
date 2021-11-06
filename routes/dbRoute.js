const express = require('express')
const router = express.Router()

const TodoModel = require('../models/todo.js')

// @desc  : 
// @route : GET /api/create
router.post('/create', async (req, res) => {
    let task = req.body
    // console.log(task);

    try {
        let response = await TodoModel.create(task)

        console.log(response);
        // res.send({ data: task, msg: "Success" })
    }
    catch (err) {
        console.log("err : ");
        console.log(err);
    }
})

router.get('/read', async (req, res) => {
    // const records = [{record: 'One'},{record: 'Two'}]    // static array of data

    // const records = await TodoModel.findOne({ task : 'asgasg' }) // for a particular record
    const records = await TodoModel.find({})    // for every document in that collection

    res.json(records)
})

router.get('/update', async (req, res) => {
    // const records = [{record: 'One'},{record: 'Two'}]    // static array of data

    // const records = await TodoModel.findOne({ task : 'asgasg' }) // for a particular record
    const records = await TodoModel.find({})    // for every document in that collection

    res.json(records)
})

module.exports = router;
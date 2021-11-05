// import mongoose
const mongoose = require('mongoose')

// import mongoose from 'mongoose';

// Schema definition
const TodoSchema = new mongoose.Schema({
    record: {
        type: String,
        required: true
    },
    data: {
        type: Number,
        default: 100
    }
})

// Syntax :   model(<Collection_Name>, <Reference_to_Schema>)
const model = mongoose.model('TodoModel', TodoSchema)

// export model for use
module.exports = model

// export default model;

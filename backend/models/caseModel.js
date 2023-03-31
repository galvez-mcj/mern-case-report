const mongoose = require('mongoose')

const Schema = mongoose.Schema

const caseSchema = new Schema({
    victim: {
        name: {
            type: String,
            required: true
        },
        occupation: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String
        }
    },
    perpetrator: {
        name: {
            type: String
        },
        occupation: {
            type: String
        },
        relationship: {
            type: String
        }
    },
    report: {
        category: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        },
        actions: {
            type: String
        },
        expectations: {
            type: String,
            required: true
        }
    }
}, { timestamps: true })


// create the model
module.exports = mongoose.model('Case', caseSchema)

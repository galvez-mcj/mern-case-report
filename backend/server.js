require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const caseRoutes = require('./routes/cases')

const app = express()

// middleware
app.use(cors())
app.use(express.json()) // to get the req body

app.use((req, res, next) => {
    console.log(`path: ${req.path} | method: ${req.method}`)
    next()
})

// case routes
app.use('/api/cases', caseRoutes)

// connect to db
mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db and listening on port ${process.env.PORT}`)
        });
    })
    .catch( (err) => console.log(err) )




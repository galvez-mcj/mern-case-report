require('dotenv').config()

const express = require('express')
const caseRoutes = require('./routes/cases')

const app = express()

// middleware
app.use(express.json()) // to get the req body

app.use((req, res, next) => {
    console.log(`path: ${req.path} | method: ${req.method}`)
    next()
})

// case routes
app.use('/api/cases', caseRoutes)

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
});


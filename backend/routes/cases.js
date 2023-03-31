const express = require('express')

const router = express.Router()

// get all cases
router.get('/', (req, res) => {
    res.json({ message: 'get all cases' })
})

// get a single case
router.get('/:id', (req, res) => {
    res.json({ message: 'get a single case' })
})

// post a new case
router.post('/', (req, res) => {
    res.json({ message: 'post a new case' })
})

// delete a case
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a case' })
})

// update a case
router.patch('/:id', (req, res) => {
    res.json({ message: 'update a case' })
})


module.exports = router
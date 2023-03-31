const express = require('express')
const {
    getCases,
    getOneCase,
    createCase,
    deleteCase,
    updateCase
} = require('../controllers/caseController')

const router = express.Router()

// get all cases
router.get('/', getCases)

// get a single case
router.get('/:id', getOneCase)

// post a new case
router.post('/', createCase)

// delete a case
router.delete('/:id', deleteCase)

// update a case
router.patch('/:id', updateCase)


module.exports = router
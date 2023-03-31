const Case = require('../models/caseModel')
const mongoose = require('mongoose')

// get all cases
const getCases = async (req, res) => {
    const cases = await Case.find({}).sort({createdAt: -1})

    res.status(200).json(cases)
}

// get a single case
const getOneCase = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such case' })
    }

    const oneCase = await Case.findById(id)
    if (!oneCase) {
        return res.status(404).json({ error: 'No such case' })
    }

    res.status(200).json(oneCase)
}

// create a new case
const createCase = async (req, res) => {
    const { victim, perpetrator, report } = req.body

    try {
        const newCase = await Case.create({victim, perpetrator, report})
        res.status(200).json(newCase)
    } catch (err) {
        res.status(400).json({ error: error.message })
    }
}

// delete a case
const deleteCase = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such case' })
    }

    const oneCase = await Case.findOneAndDelete({ _id: id })
    if (!oneCase) {
        return res.status(400).json({ error: 'No such case' })
    }

    res.status(200).json(oneCase)
}

// update a case
const updateCase = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such case' })
    }
    
    const oneCase = await Case.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!oneCase) {
        return res.status(400).json({ error: 'No such case' })
    }

    res.status(200).json(oneCase)
}

module.exports = {
    getCases,
    getOneCase,
    createCase,
    deleteCase,
    updateCase
}
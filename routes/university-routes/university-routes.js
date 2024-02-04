const express = require('express')
const addUniversityController = require('../../controllers/addUniversityController')
const universityRouter = express.Router()

universityRouter.post('/add-uni-info', addUniversityController)

module.exports = universityRouter
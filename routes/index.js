const express = require('express')
const universityRouter = require('./university-routes/university-routes')
const router = express.Router()

router.use('/api/v1', universityRouter)
// router.use('/api/v2', isKaNayaController)

module.exports = router
const express = require('express')
const router = express.Router()
const pagetwoController = require('../controllers/pagetwo')

router.get('/', pagetwoController.getPageTwo)

router.post('/createPagetwo', pagetwoController.createPagetwo)

router.delete('/deletePagetwo', pagetwoController.deletePagetwo)

module.exports = router
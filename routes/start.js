const express = require('express')
const router = express.Router()
const startController = require('../controllers/start')

router.get('/', startController.getStart)//do not need '/start'..idk y but it works with just'/' 

router.post('/createStart', startController.createStart)

router.delete('/deleteStart', startController.deleteStart)

module.exports = router
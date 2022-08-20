const express = require('express')
const router = express.Router()
const pagethreeController = require('../controllers/pagethree')

router.get('/', pagethreeController.getPageThree)

router.post('/createPagethree', pagethreeController.createPagethree)

router.delete('/deletePagethree', pagethreeController.deletePagethree)

module.exports = router
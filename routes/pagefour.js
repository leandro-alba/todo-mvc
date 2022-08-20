const express = require('express')
const router = express.Router()
const pagefourController = require('../controllers/pagefour')

router.get('/', pagefourController.getPageFour)

router.post('/createPagefour', pagefourController.createPagefour)

router.delete('/deletePagefour', pagefourController.deletePagefour)

module.exports = router
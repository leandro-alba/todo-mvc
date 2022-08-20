const express = require('express')
const router = express.Router()
const pagefiveController = require('../controllers/pagefive')

router.get('/', pagefiveController.getPageFive)

router.post('/createPagefive', pagefiveController.createPagefive)

router.delete('/deletePagefive', pagefiveController.deletePagefive)

module.exports = router
const express = require('express')
const router = express.Router()
const {getHomepage, getABC, test} = require('../controllers/homeControllers')

router.get('/', getHomepage)
   
router.get('/abc', getABC)
   
router.get('/test', test)

module.exports = router
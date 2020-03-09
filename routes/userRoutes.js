const express = require('express');
const { limiter } = require('../middleware/rateLimit');
const { importExcel, updateProfile } = require('../controller/importExcel');
const { checkUser } = require('../middleware/checkDb');
const router = express.Router();

router.get('/importExcel', checkUser, importExcel);
router.post('/addProfile', updateProfile)

module.exports = router;
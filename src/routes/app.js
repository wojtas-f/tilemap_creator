const express = require('express')

const router = new express.Router()

const { getAppVersion } = require('../controller/app')

router.route('/app/version').get(getAppVersion)

module.exports = router

const express = require('express')

const router = new express.Router()

const { getAppVersion } = require('../controller/app')

/**
 * @swagger
 *
 * /app/version:
 *      get:
 *          tags:
 *              - app
 *          description: Read version numbers from package.json for client and server
 *          responses:
 *              200:
 *                  description: Returns the array with version numbers
 */
router.route('/app/version').get(getAppVersion)

module.exports = router

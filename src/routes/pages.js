const express = require('express')

const router = new express.Router()

const {
    renderTutorial,
    renderError,
    renderReactApp
} = require('../controller/pages')

/**
 * @swagger
 *
 * /:
 *      get:
 *          pages:
 *              - app
 *          description: Get client application
 *          responses:
 *              200:
 *                  description: Returns react application
 */
router.route('/').get(renderReactApp)

/**
 * @swagger
 *
 * /tutorial:
 *      get:
 *          pages:
 *              - app
 *          description: Get tutorial website
 *          responses:
 *              200:
 *                  description: Returns webiste with instructions how to use map editor
 */
router.route('/tutorial').get(renderTutorial)

/**
 * @swagger
 *
 * /*:
 *      get:
 *          pages:
 *              - app
 *          description: Error page
 *          responses:
 *              200:
 *                  description: Returns error page
 */
router.route('/*').get(renderError)

module.exports = router

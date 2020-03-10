const express = require('express')

const router = new express.Router()

const {
    renderTutorial,
    renderError,
    renderReactApp
} = require('../controller/pages')

// router.route('/').get(renderReactApp)
router.route('/tutorial').get(renderTutorial)
router.route('/*').get(renderError)

module.exports = router

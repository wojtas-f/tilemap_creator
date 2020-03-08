const express = require('express')

const router = new express.Router()

const { renderTutorial, renderError } = require('../controller/pages')

router.route('/tutorial').get(renderTutorial)
router.route('/*').get(renderError)

module.exports = router

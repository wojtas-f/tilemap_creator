// const path = require('path')

exports.renderReactApp = (req, res) => {
    res.sendFile('index.html')
}

exports.renderTutorial = (req, res) => {
    res.render('tutorial')
}

exports.renderError = (req, res) => {
    res.render('404')
}

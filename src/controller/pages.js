// const path = require('path')

// exports.renderReactApp = (req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// }

exports.renderTutorial = (req, res) => {
    res.render('tutorial')
}

exports.renderError = (req, res) => {
    res.render('404')
}

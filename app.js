const path = require('path')

const express = require('express')
const hbs = require('hbs')
const cors = require('cors')

const app = express()

const PagesRouter = require('./src/routes/pages')

const publicServerDirectoryPath = path.join(__dirname, '../public')
const publicClientDirectoryPath = path.join(__dirname, '../client/public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.use(cors())

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicServerDirectoryPath))
app.use(express.static(publicClientDirectoryPath))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(PagesRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

module.exports = app

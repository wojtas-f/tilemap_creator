const path = require('path')

const express = require('express')
const hbs = require('hbs')

const app = express()

const PagesRouter = require('./routes/pages')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(PagesRouter)

module.exports = app

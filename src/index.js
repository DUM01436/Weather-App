const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const PORT = process.env.PORT || 3000
const rootPath = path.join(__dirname, '../')

app.use(express.static(path.join(rootPath, './public')))
app.set('view engine','hbs')
app.set('views', path.join(rootPath, './templates/views'))
hbs.registerPartials(path.join(rootPath, './templates/partials'))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('/404', (req, res) => {
    res.render('404')
})

app.get('*', (req, res) => {
    res.redirect('/404')
})

app.listen(PORT)
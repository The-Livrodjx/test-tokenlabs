const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('oi')
})
app.get('/cadastro', (req, res) => {
  res.render('create')
})
app.listen(8080)

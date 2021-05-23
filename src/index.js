// require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/cadastro', (req, res) => {
  res.render('create')
})

app.listen(PORT, () => console.log("Server running at PORT: " + PORT))

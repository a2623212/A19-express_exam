const express = require('express')
const app = express()
const port = 3000

const hbs = require('express-handlebars')

// template engine setting
app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// route setting
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about', {
    style: 'about.css',
  })
})
app.get('/portfolio', (req, res) => {
  res.render('portfolio', {
    style: 'portfolio.css',
  })
})
app.get('/contact', (req, res) => {
  res.render('contact', {
    style: 'contact.css',
  })
})

// start and listen 
app.listen(port, () => {
  console.log(`Express is listening on localhost ${port}`)
})
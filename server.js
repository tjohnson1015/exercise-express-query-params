const http = require('http');
const express = require('express')

const port = 3000
const hostname = 'localhost'

const app = express()
const server = http.createServer(app)

const productsService = require('./services/products')

app.get('/', (req, res) => res.send('Build the API!'))

// Build Routes

//All Products

app.get('/api/v1/products', (req, res) => {
  const products = productsService.findAll()
  res.json(products)
})

//Product by ID

app.get('/api/v1/products/:id', (req, res) => {
  const prodId = Number(req.params.id)
  const product = productsService.findOneById(prodId)
  if (!product) {
    res.json(404).json({error: 'No product found'})
  }
  res.json(product)
})

//Search Product *** Doesnt work **

// app.get('/api/v1/products/search', (req, res) => {
//   const key = req.query.key
//   const value = req.query.value
//   const sortBy = req.query.sort || 'id'
//   const order = req.query.order || 'ASC'
//   if (!key || !value) {
//     res.status(400).json({ error: 'Invalid search query' })
//     return
//   }
//   const products = productsService.search(key, value, sortBy, order)
//   res.json(products)
// })


app.get('*', (req, res) => res.status(404).send('Page not found'))

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
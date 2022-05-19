const http = require('http');
const express = require('express')

const port = 3000
const hostname = 'localhost'

const app = express()
const server = http.createServer(app)

const productsService = require('./services/products')

app.get('/', (req, res) => res.send('Build the API!'))

// Build Routes
// Get All Products
app.get('/api/v1/products', (req, res) => {
  // set sort property or default to 'id'
  const sortBy = req.query.sort || 'id'
  // set sort direction or default to 'ASC'
  const order = req.query.order || 'ASC'
  // use service to get all products with sort and order
  const products = productsService.findAll(sortBy, order)
  // send response
  res.json(products)
})

// Get Product By Id
app.get('/api/v1/products/:id', (req, res) => {
  // check if id is a valid number
  const id = Number(req.params.id)
  // if not a valid number, send error response and return
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid ID' })
    return
  }

  // if valid, find product by id
  const product = productsService.findOneById(id)
  // if not found, send error response and return
  if (!product) {
    res.status(404).json({ error: 'Product not found' })
    return
  }

  // if found, send product response
  res.json(product)
})

app.get('*', (req, res) => res.status(404).send('Page not found'))

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
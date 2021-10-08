const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

const PORT = 5000

const url = 'https://northwind.now.sh/api/db'

app.use(cors())

app.get('/products', (req, res) => {
  axios.get(url).then((response) => {
    res.send(response.data) 
  }).catch(error => {
    res.send(error.message)
  })
})

app.get('/suppliers', (req, res) => {
  axios.get(url).then((response) => {
    res.send(response.data.suppliers) 
  }).catch(error => {
    res.send(error.message)
  })
})

app.get('/orders', (req, res) => {
  axios.get(url).then((response) => {
    res.send(response.data) 
  }).catch(error => {
    res.send(error.message)
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
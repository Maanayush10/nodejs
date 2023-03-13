const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('<h1>Welcome</h1><p>This is my about page</p>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
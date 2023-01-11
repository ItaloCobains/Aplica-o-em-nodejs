import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Ola s')
 })

app.use((request, response, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, request, response, next) => {
  if (err.status !== 404) console.log(err.stack)
  response.status(err.status || 500).json({ err: err.message })
})

app.listen(3000)

// pagina 157
import express from 'express'
import AppController from './controller/App.js'
import routes from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.use(AppController.notFound)
app.use(AppController.handleError)

export default app
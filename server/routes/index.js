import { Router } from 'express'
import Home from '../controller/Home.js'

import trooperRoutes from './trooper.js'


const routes = new Router()
routes.use('/troopers', trooperRoutes)
routes.get('/', Home.index)
routes.get('/favicon.ico', (request, response, next) => {
  response.writeHead(200, { 'Content-Type': 'image/x-icon' })
  response.end('')
})
export default routes

import { Router } from 'express'
import Stormtrooper from '../controllers/Stormtrooper.js'

const trooperRoutes = new Router()
trooperRoutes.get('/', Stormtrooper.list)
trooperRoutes.get('/:id', Stormtrooper.byId)
trooperRoutes.post('/', Stormtrooper.create)
trooperRoutes.put('/:id', Stormtrooper.updateById)
trooperRoutes.delete('/:id', Stormtrooper.deleteById)
export default trooperRoutes

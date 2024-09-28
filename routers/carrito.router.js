import controladoresCarrito from '../controllers/carrito.controllers.js'
import express from 'express'
const routerCarrito = express.Router()
routerCarrito.post('/', controladoresCarrito.guardarCarrito)
export default routerCarrito
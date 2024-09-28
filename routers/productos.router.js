import express from 'express'
import controladores from '../controllers/productos.controllers.js'
const routerProductos = express.Router()
routerProductos.get('/', controladores.getAll)
routerProductos.get('/:id', controladores.getOne)
routerProductos.post('/', controladores.create)
routerProductos.put('/:id', controladores.update)
routerProductos.delete('/:id', controladores.remove)
export default routerProductos
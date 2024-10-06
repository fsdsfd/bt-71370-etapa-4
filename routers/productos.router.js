import express from 'express'
import controladores from '../controllers/productos.controllers.js'
import arrayMiddlewares from '../middlewares/arrayMiddlewares.js'
const routerProductos = express.Router()
routerProductos.get('/', controladores.getAll)
routerProductos.get('/:id', controladores.getOne)
routerProductos.post('/', arrayMiddlewares, controladores.create)
routerProductos.put('/:id',arrayMiddlewares, controladores.update)
routerProductos.delete('/:id', controladores.remove)
export default routerProductos
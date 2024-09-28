import modelos from '../models/productos.models.js'
import handleMongoId from '../utils/handle-mongo-id.js'
const getAll = async (req,res)=>{
    try {
        const productos = await modelos.getAllProductos()
        res.json(handleMongoId(productos))
    } catch (error) {
        console.log('getAll', error)
    }

}
const getOne = async (req,res)=>{
    const id = req.params.id
    try {
        const producto = await modelos.getOneProducto(id)
        console.log(id)
        res.json(handleMongoId(producto))
    } catch (error) {
        console.log('getOne', error)
    }

}
const create = async (req,res)=>{
    try {
        const producto = req.body
        console.log(producto)
        const productoCreado = await modelos.postProducto(producto)
        console.log(productoCreado)
        res.json(handleMongoId(productoCreado))
    } catch (error) {
        console.log('create', error)
    }

}
const update = async (req,res)=>{
    try {
        const productoEditado = req.body
        const id = req.params.id
        console.log(id)
        console.log(productoEditado)
        const productoUpdate = await modelos.putProducto(id, productoEditado)
        res.json(handleMongoId(productoUpdate))
    } catch (error) {
        console.log('update', error)
    }

}
const remove = async (req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        const productoBorrado = await modelos.deleteProducto(id)
        res.json(handleMongoId(productoBorrado))
    } catch (error) {
        console.log('remove', error)
    }
}
export default {
    getAll,
    getOne,
    create,
    update,
    remove
}
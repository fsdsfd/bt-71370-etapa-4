import mongoose from 'mongoose'
import productoEsquema from './esquemas/productosEsquema.js'
const productoModelo = mongoose.model('productos', productoEsquema)
const getAllProductos = async()=>{
    try {
        const productos = await productoModelo.find()
        console.log(productos)
        return productos
    } catch (error) {
        console.log('getAllProductos', error)
    }
}

const getOneProducto = async(id)=>{
    try {
        const producto = await productoModelo.findById(id)
        console.log(producto)
        return producto
    } catch (error) {
        console.log('[getOneProducto]', error)
    }
}
const postProducto = async(producto)=>{
    try {
        const productoCrear = await productoModelo.create(producto)
        console.log(productoCrear)
        return productoCrear
    } catch (error) {
        console.log('[postProducto]', error)
    }
}
const putProducto = async(id, producto)=>{
    try {
        const options = {new: true}
        const productoEditado = await productoModelo.findByIdAndUpdate(id, producto, options)
        console.log(productoEditado)
        return productoEditado
    } catch (error) {
        throw error
    }
}
const deleteProducto = async(id)=>{
    try {
        const productoEliminado = await productoModelo.findByIdAndDelete(id)
        console.log(productoEliminado)
        return productoEliminado
    } catch (error) {
        console.log('deleteProducto', error)
    }
}
export default {
    getAllProductos,
    getOneProducto,
    postProducto,
    putProducto,
    deleteProducto
}
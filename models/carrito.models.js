import carritoEsquema from "./esquemas/carritoEsquema.js"
import mongoose from "mongoose"
const carritoModelo = mongoose.model('carritos', carritoEsquema)
const crearCarrito = async(carrito)=>{
    try {
        const carritoCreado = new carritoModelo({carrito}) // Tiene que ser un objeto
        const carritoGuardado = await carritoCreado.save()
        return carritoGuardado
    } catch (error) {
        console.log('crearCarrito', error)
    }
}
export default {crearCarrito}
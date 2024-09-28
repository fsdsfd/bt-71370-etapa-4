import mongoose from 'mongoose'
const carritoEsquema = mongoose.Schema(
    {
    carrito: Array
    },
{
    timestamps: true,
    versionKey: false
})
export default carritoEsquema
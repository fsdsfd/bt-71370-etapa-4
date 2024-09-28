import mongoose from 'mongoose'
const productoEsquema = mongoose.Schema({
    nombre : String,
    descripcion : String,
    foto: String,
    precio : Number,
    envio: Boolean
},
{
    timestamps: true,
    versionKey: false
})
export default productoEsquema
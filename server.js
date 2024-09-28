import express from 'express'
import 'dotenv/config'
import routerProductos from './routers/productos.router.js'
import getConnection from './utils/get-connection.js'
import cors from 'cors'
import routerCarrito from './routers/carrito.router.js'
const uri_remota = process.env.URI_MONGO
const app = express()
const PORT = process.env.PORT || 2222
//! Middlewares
app.use(express.json())
app.use(cors({
  origin: '*',  // Permite solicitudes desde cualquier origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Permite estos métodos HTTP
  allowedHeaders: ['Content-Type', 'Authorization']  // Configura los encabezados permitidos
}));

app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/carritos', routerCarrito)
app.options('/api/v1/carritos', cors()); 
app.get('/', (req, res) => {
  res.redirect('/api/v1/productos')
})
app.all('*',(req,res)=>{
    res
    .status(404)
    .json({
        ruta : `${req.url}`,
        metodo : `${req.method}`,
        mensaje: "No se pudo acceder a la ruta deseada"
    })
})
app.listen(PORT, (err) => {
    if (err) {
        throw new Error('No se pudo levantar el servidor', err)
    }
    getConnection(uri_remota)
  console.log(`http://localhost:${PORT}/`)
})
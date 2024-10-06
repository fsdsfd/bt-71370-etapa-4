import express from 'express'
import 'dotenv/config'
import routerProductos from './routers/productos.router.js'
import getConnection from './utils/get-connection.js'
import cors from 'cors'
import routerCarrito from './routers/carrito.router.js'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
const uri_remota = process.env.URI_MONGO
const app = express()
const PORT = process.env.PORT || 2222
//! Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads') // Destinación a guardar las imagenes
  },
  filename: function (req, file, cb) {
    console.log(file)
    const uniqueSuffix = uuidv4()
    const extension = file.mimetype.split('/') // En extension = va a dividir el string de mimetype en base a la barra
    // Lo que dará un array de 2 posiciones[image, jpg]
    console.log(extension)
    // El null se refiere al error, en caso de haber un error ya no sería un null
    const nombreArchivo = uniqueSuffix + '.' + extension[1]
    cb(null, nombreArchivo)
  }
})

const upload = multer({ storage: storage })
app.use(express.static('./public'))
app.use(express.json())
app.use(cors({
  origin: '*',  // Permite solicitudes desde cualquier origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Permite estos métodos HTTP
  allowedHeaders: ['Content-Type', 'Authorization']  // Configura los encabezados permitidos
}));

//! Middlewares
app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/carritos', routerCarrito)
app.options('/api/v1/carritos', cors()); 
//! Rutas

app.get('/', (req, res) => {
  res.redirect('/api/v1/productos')
})
// Le ponemos un middleware a nivel de ruta el 'avatar' en este caso sería como el name del input <input type='text' name = 'avatar'>
app.post('/api/v1/uploads', upload.single('foto'),(req,res)=>{

  const file = req.file
  console.log(file)

  console.log(req.protocol)
  console.log(req.get('host')) // Obtengo url

  const urlCompleta = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
  console.log(urlCompleta)

  res.json({urlCompleta}) // Un objeto que tiene la información completa de la imagen y guarda el back
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
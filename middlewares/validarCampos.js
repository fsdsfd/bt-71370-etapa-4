import { validationResult } from "express-validator"

const validarCampos = (req,res,next)=>{ // Esto es otro middleWare
    const errores =validationResult(req) //Se encarga de obtener los errores que se generan dentro del objeto request
    if (!errores.isEmpty()) {
        return res.status(400).json(errores)
    }
    next()
}
export default validarCampos
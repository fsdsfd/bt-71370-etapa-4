import { check } from "express-validator";
import validarCampos from "./validarCampos.js";
const arrayMiddlewares = [
        // Le pasamos un array de middlewares con la libreria check
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        // el campo que checkee : el mensaje de error, checkea si está vacío
        check('descripcion', 'La descripción es obligatoria').notEmpty(),
        check('precio', 'El precio es obligatorio').notEmpty(),
        check('foto', 'La foto es obligatoria').notEmpty(),
        // Si no le pongo el mensaje de error va a aparecer un  mensaje de error en inglés por default
        validarCampos
]
export default arrayMiddlewares



// redireccionando router o enpoints de persona

import {Router} from 'express';
import { deletePersona, getPersona, getPersonas, posPersona, putPersona } from '../controllers/persona.controller';


const router = Router();


// obtiene todo
// http://localhost:3000/api/personas
router.get('/' , getPersonas );


// obtiene solo 1 persona
// '/:id' : parametro = en el controller 
// http://localhost:3000/api/personas/1
router.get('/:id',getPersona)


//elimina una persona
// '/:id' : parametro = en el controller 
// http://localhost:3000/api/personas/1
router.delete('/:id',deletePersona)



// http://localhost:3000/api/personas
// {
//     "nombre":"new",
//     "apellido":"berd",
//     "correo":"jorge@",
//     "tipoDocumento":"tipoDocu",
//     "documento":48383,
//     "fechaNacimiento":"2017-06-15"
// }
router.post('/',posPersona)



// http://localhost:3000/api/personas/10  
// {
//     "nombre":"cristiano",
//     "apellido":"berd",
//     "correo":"jorge@"
// }
router.put('/:id',putPersona) 


// exportando
export default router;
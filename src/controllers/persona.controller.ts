

// metodo logica controller para persona 


import { Request, Response } from 'express';
import connection from '../db/connections';




// metodo obiente todo get 
export const getPersonas = (req: Request, res: Response) => {


    // regreso al front  sin sp 
    // connection.query('select * from persona',(err ,data)=>{
    //     if(err) throw err; //si hay error
        
    //     // return front
    //     res.json(data)
    // })


    // con sp 
    connection.query('call get_personas()',(err ,data)=>{

        // si hay error
        if(err) throw err;
        
        // que exista data y haiga data 
        if(data && data.length > 0){
            // cuando son sp se envia el 1 array su posicion 
            res.json(data[0])
        }else{
            // si no hay enviamos vacio
            res.json([])
        }

    })
}




// metodo obtiene solo 1 persona 
export const getPersona = (req: Request, res: Response) => {

    // parametros del cliente = en el routers
    // desectructurando
    const { id } = req.params;



    // regreso al front query sql sin sp 
    // connection.query('select * from persona where id =  ?' , id ,(err , data)=>{
    //     if( err) throw err; //si hay error
    //     // return front
    //     // devuelve en array x eso queremos el primero
    //     res.json(data[0])
    // } )



    // con sp 
    connection.query('call getdataxid(?)' , id ,(err , data)=>{
        if( err) throw err;
        res.json(data[0])
    } )
    
}




// metodo eliminar por id una persona 
export const deletePersona = (req: Request, res: Response) => {
        // parametros del cliente = en el routers
    // desectructurando
    const { id } = req.params;


    // regreso al front query sin sp 
    // connection.query('delete from persona where id = ?' , id ,(err , data)=>{
    //   if(err) throw err; //si hay error
    
    //   //   return front
    //   res.status(200).json({
    //     msj:`la persona con ${id} eliminado correctamente`
    //   })
    // })


    // con sp 
      connection.query('call deletexid(?)' , id ,(err , data)=>{
      if(err) throw err;
      res.status(200).json({
        msj:`la persona con ${id} eliminado correctamente`
      })
    })
}







// metodo crear 
export const posPersona = (req: Request, res: Response) => {
        // parametros del cliente = en el routers
    // desectructurando
    const {body} = req; 
    const {nombre , apellido , correo , tipoDocumento , documento , fechaNacimiento}= req.body; //para el sp
    


// insertando en la bd
// []: son lo index
// connection.query('INSERT INTO persona set ?',[body],(err , data )=>{

//     // error 
//     if(err) throw err;
//     // regreso al front 
//     res.status(200).json({
//         msg:`persona agrega correctamente ${body.nombre}`
//     })
// })



// // con sp 
var sql= `call postPersona( ? , ? , ? , ?, ?, ?)`;
connection.query(sql,[  nombre , apellido , correo , tipoDocumento,
    documento , fechaNacimiento ], (err , data )=>{

        // error 
        if(err) throw err;
        
        // regreso al front 
        res.status(200).json({
            msg:`persona agrega correctamente`
        })
    })


}









// metodo actualizar 
export const putPersona = (req: Request, res: Response) => {
    // parametros del cliente = en el routers
    // desectructurando
    const {body }= req;
    const {id}= req.params;



    //consutla sql 
    // connection.query('update persona set ? where id = ?',[body , id],(err , data)=>{
    //     // si generar error
    //     if(err) throw err;

    //     // response cliente
    //     res.status(200).json({
    //         msg:`${body.nombre }actualizado correctamente`
    //     })
    // })



    // con sp 

    // desestructurando
    const {nombre , apellido , correo , tipoDocumento , documento , fechaNacimiento } = body;
    var sql= `call updatePersona( ?, ? , ? , ? , ?, ?, ?)`;

    connection.query(sql,[id, nombre , apellido , correo , tipoDocumento,documento , fechaNacimiento],(err , data)=>{

        // si generar error
        if(err) throw err;

        // response cliente
        res.status(200).json({
            msg:`${body.nombre } actualizado correctamente`
        })
    })
}
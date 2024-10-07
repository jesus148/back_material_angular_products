

// metodo logica controller para persona 


import { Request, Response } from 'express';
import connection from '../db/connections';




// metodo obiente todo get 
export const getPersonas = (req: Request, res: Response) => {
    // regreso al cliente
    // res.json({
    //     msg:"getPersonas"
    // })

    // regreso al front  sin sp 
    // connection.query('select * from persona',(err ,data)=>{
    //     if(err) throw err;
        
    //     res.json(data)
    // })

    // con sp 
    connection.query('call get_personas()',(err ,data)=>{
        if(err) throw err;
        
        res.json(data)
    })
}




// metodo obtiene solo 1 persona 
export const getPersona = (req: Request, res: Response) => {

    // parametros del cliente = en el routers
    // desectructurando
    const { id } = req.params;


    // regreso al cliente
    // res.json({
    //     msg:"getPersona",
    //     id: id
    // })

    // regreso al front query sql sin sp 
    // connection.query('select * from persona where id =  ?' , id ,(err , data)=>{
    //     if( err) throw err;
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

    // regreso al cliente
    // res.json({
    //     msg:"deletePersona",
    //     id: id
    // })
    // regreso al front query sin sp 
    // connection.query('delete from persona where id = ?' , id ,(err , data)=>{
    //   if(err) throw err;
    //   res.status(200).json({
    //     msj:`la persona con ${id} eliminado correctamente`
    //   })
    // })


    // con sp 
        connection.query('call deletexid(2)' , id ,(err , data)=>{
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
    const {nombre , apellido , correo , tipoDocumento , documento , fechaNacimiento}= req.body;
    


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


// con sp 
var sql= `INSERT INTO persona (nombre ,apellido , correo , tipoDocumento , documento ,
 fechaNacimiento  ) values ( ? , ? , ? , ?, ?, ?)`;

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
    const {body}= req;
    const {id}= req.params;

// regreso al cliente
    // res.json({
    // msg:"postpersona",
    // body: body ,
    // id: id
    // })

    //consutla sql 
    connection.query('update persona set ? where id = ?',[body , id],(err , data)=>{

        // si generar error
        if(err) throw err;

        // response cliente
        res.status(200).json({
            msg:`${body.nombre }actualizado correctamente`
        })
    })
}
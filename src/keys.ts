

// conexion a la bd , solo es la estructura
// , es como englobar toda la data nesecaria de la configuracion de tu bd en un objeto 

const database ={
    host:'localhost',
    user:'root',
    password:'1977',  //clave
    database: 'supermercado'  //base de datos
}

// exportando , al importa en otro  lugar puedes ponerle cualquier nombre
export default database;
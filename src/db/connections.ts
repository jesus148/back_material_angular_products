import mysql from 'mysql';
import keys from '../keys'; //importando


// para la conexion en mysql , aqui si se configura la conexion


// conexion
// keys.ts se usa para lo conexion  
const connection = mysql.createConnection(keys);

// exportando
export default connection;
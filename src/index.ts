

// // importando la clase server ESTO LEVANTA TODO
import Server from "./models/server";
import dotenv from 'dotenv';



// Configuramos dot.env
// variables de entorno 
dotenv.config();


// crea el seridor instancia
const server = new Server();

// escucha
server.listen();


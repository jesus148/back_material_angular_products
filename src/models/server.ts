

// clase servidor contiene la logica de todo

import express, { Application } from 'express';
import routesPersonas from '../routes/persona.routes';
import cors from 'cors';
import connection from '../db/connections';

// clase
class Server{

    // creacion app con express
    private app: Application;
    // puerto
    private port: string;

    // inicia
    constructor() {
        // app express
        this.app = express();
        // puerto del back  , el 1 process.env.PORT  se usa para produccion
        this.port = process.env.PORT || '4000';

        // midlewares intercepta
        this.middlewares();

        // ejecuta el routers
        this.routes()

        // conexion a la bd
        this.conectarDB();

    }

    // escucha puerto o crea el puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto ', this.port);
        })
    }

    // para los middlewares
    middlewares() {

        // Parseo del body , para regresar data al cliente y al front bidireccional
        this.app.use(express.json());

        // Cors , puertos del front , osea q puede hacer solicitudes a tu rest
        this.app.use(cors());
    }


    // para los roueters
    routes() {
        this.app.use('/api/personas', routesPersonas);
    }


    // para la conexion a la bd
    conectarDB() {
        // se conecta
        connection.connect((err) => {
            // si hay error
            if(err) throw err;

            // si todo esta ok
            console.log('Conectado a la base de datos')
        })
    }

}


// exportando
export default Server;
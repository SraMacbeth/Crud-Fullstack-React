// importo dependencias
import express from "express"
import cors from "cors"
import db from "./database/db.js"
import postRoutes from "./routes/postRoutes.js"

// variable que contiene las funciones de express
const app = express()

// variable que define el puerto
const port = 8000

// habilito lo que voy a usar en el proyecto
app.use(cors()) // habilita el intercambio de informacion
app.use(express.json()) // maneja los datos en formato json

// configuracion de rutas
app.use("/post", postRoutes)

// conexion a la db
const conexionDB = async () => {
    try {
        await db.authenticate()
        console.log("Conectado OK a la DB");
    } catch (error) {
        console.log(`"error: ${error}`);
    }
}

// levantar el servidor
app.listen(port, ()=>{
    conexionDB()
    console.log(`Servidor del proyecto ok en el puerto ${port}`)
})




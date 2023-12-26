// este archivo contiene las credenciales para acceder a la db

// importo sequelize
import { Sequelize } from "sequelize";

// traigo un objeto donde voy a configurar las credenciales
// pide: nombreDB, user, password, {ubicacionDB, lenguajeDB, puerto}
const db = new Sequelize("postCaC", "root", "julian10", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

export default db
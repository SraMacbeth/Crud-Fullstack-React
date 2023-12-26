// este archivo crea el modelo de la DB (representacion de la tabla en codigo)

// importo las credenciales de la db
import db from "../database/db.js";
// importo Datatypes para poder usar los tipos de datos de JS
import { DataTypes } from "sequelize";

// variable que guarda la representacion
// define(nombreTabla, {columnas de la tabla})
// el id autoincremental y createdAt y updatedAt no se representan, porque se hacen automaticamente
const postModel = db.define("posts", {
    title: {type:DataTypes.STRING},
    content: {type:DataTypes.STRING}
})

export default postModel

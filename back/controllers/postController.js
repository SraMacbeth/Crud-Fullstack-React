// importo el modelo
import { response } from "express"
import postModel from "../models/postModel.js"

// funcion que muestra todos los resgistros
// es una funcion asincroma porque va a conectarse a la DB y miebtras eso ocurre permite que el resto del programa siga ejecutandose. Utiliza la promesa async/await
// req = request => es lo que envia el cliente
// res = response => es lo que devuelve el servidor
export const getAllPost = async (req, res) => {
    try {
        const posts = await postModel.findAll() // busco todos los registros en la DB
        res.json(posts) // devuelvo un json
    } catch (error) {
        res.json({message: error.message})
    }
}

// funcion que muestra un resgistro
export const getPost = async (req, res) => {
    try {
        const {id} = req.params // tomo el id que viaja por parametro
        const post = await postModel.findByPk(id) // busco el registro en la DB que coincida con el id
        res.json(post)
    } catch (error) {
        res.json({message: error.message})
    }
}

// funcion que crea un resgistro
export const createPost = async (req, res) => {
    try {
        await postModel.create(req.body) // envio a la DB lo que viaja en el request del body  
        res.json({
            "message": "registro creado correctamente"
        })
    } catch (error) {   
        res.json({message: error.message})
    }
}

// funcion que actualiza un resgistro
export const updatePost = async (req, res) => {
    try {
        await postModel.update(req.body, { // envio a la DB lo que viaja en el request del body 
            where: {id: req.params.id} // identifico en que columna quieo que se guarden los datos
        }) 
        res.json({
            "message": "registro editado correctamente"
        })
    } catch (error) {   
        res.json({message: error.message})
    }
}

// funcion que elimina un resgistro
export const deletePost = async (req, res) => {
    try {
        await postModel.destroy({ 
            where: {id: req.params.id}
        }) 
        res.json({
            "message": "registro eliminado correctamente"
        })
    } catch (error) {   
        res.json({message: error.message})
    }
}

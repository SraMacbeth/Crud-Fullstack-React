import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

// llamar al endpoint (nuestra api en el local host: 8000)
const API = "http://localhost:8000/post/"


const Edit = () => {
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")

    const navigate = useNavigate()

    const {id} = useParams()

    // procedimiento que trae un posteo por su id
    const getPostById = async () => {
        const respuesta = await axios.get(API+id)
        setTitulo(respuesta.data.title)
        setContenido(respuesta.data.content)
    }
    
    useEffect(()=>{
        getPostById()
    },[]) 
    
    //procedimiento para actualizar un post
    const updatePost = async (e) => {
        e.preventDefault()
        await axios.put(API+id, {
            title: titulo,
            content: contenido
        })
        navigate("/")
    }

    return (
        <div className="m-3">
            <h1 className="mb-5">Editar Post</h1>
            <form onSubmit={updatePost}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea value={contenido} onChange={(e)=>setContenido(e.target.value)} className="form-control" />
                </div>
                <button type="submit"className="btn btn-primary">Editar</button>
            </form>
        </div>
    )
}

export default Edit


import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// llamar al endpoint (nuestra api en el local host: 8000)
const API = "http://localhost:8000/post/"

const Create = () => {
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")

    const navigate = useNavigate()

    // procedimiento para crear un registro
    const create = async (e) => {
        e.preventDefault()
        await axios.post(API, {
            title: titulo,
            content: contenido
        })
        navigate("/")
    }

    return (
        <div className="m-3">
            <h1 className="mb-5">Crear Post</h1>
            <form onSubmit={create}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea value={contenido} onChange={(e)=>setContenido(e.target.value)} className="form-control" />
                </div>
                <button type="submit"className="btn btn-primary">Crear</button>
            </form>
        </div>
    )
}

export default Create
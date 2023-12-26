import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

// llamar al endpoint (nuestra api en el local host: 8000)
const API = "http://localhost:8000/post/"

const Show = () => {
    // estados
    const [posts, setPosts] = useState([])

    // procedimiento que trae todos los post
    const getAllPost = async () => {
        const res = await axios.get(API)
        setPosts(res.data)
        /* console.log(res) */
    }

    useEffect(() => {
        getAllPost()   
    }, [])

    // procedimiento para borrar un post
    const deletePost =  async (id) => {
        await axios.delete(`${API}${id}`)
        getAllPost()
    }

    const confirmDelete = (id) => {
        Swal.fire({
          title: "¿Está seguro?",
          text: "¡No se podrá revertir esta acción!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, ¡quiero eliminarlo!",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            deletePost(id);
            Swal.fire("¡Borrado!", "El documento ha sido eliminado.", "success");
          }
        });
      };

    return (
        <>
        <div className="container">
            <h1 className="mb-5">Gestor de Posteos</h1>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td>
                                        <Link to={`edit/${post.id}`} className="btn btn-info m-2">
                                            <i className="fa fa-edit"></i>
                                        </Link>
                                        <button onClick={()=>confirmDelete(post.id)} className="btn btn-danger m-2">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-md-flex justify-content-md-end m-3">
                        <button className="btn btn-light border border-primary">                    
                            <Link to="/create" className="text-decoration-none text-reset">
                                <small>Create Post</small>
                                <i className="fa-regular fa-plus m-2"></i>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Show
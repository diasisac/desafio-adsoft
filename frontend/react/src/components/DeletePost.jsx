import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeletePost = (props) => {
    const { id } = useParams();
    const [users, setUser] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3333/users/${id}`).then(result => {
            setUser(result.data.result[0]);
        })
    }, [id]);

    const handleRemoveUsuario = () => {
        axios.delete(`http://localhost:3333/users/${id}`).then(result => {
            props.history.push("/");
        })
    }

    return (
        <div>
            <h2>Deseja excluir o usurio <strong>{users?.nome}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancelar
                </Link>
                <button onClick={handleRemoveUsuario} className="btn btn-danger">
                    Excluir <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default DeletePost;
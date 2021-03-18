import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';


const UserDetails = () => {
    const { id } = useParams();
    const [users, setUser] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3333/users/${id}`).then(result => {
            setUser(result.data.result[0]);
        })
    }, [id]);

    
    return (
        <div>
            <h1>{users?.nome}<br /><small>por {users?.sobrenome}</small></h1>
            <p>{users?.sobrenome}</p>
            <div className="btn-group">
                <Link to={`/edit/${users?.id}`} className="btn btn-primary">
                    Editar <i className="fa fa-edit"></i>
                </Link>
                <Link to={`/delete/${users?.id}`} className="btn btn-danger">
                    Excluir <i className="fa fa-trash"></i>
                </Link>
            </div>
        </div>
    );
}

export default UserDetails;
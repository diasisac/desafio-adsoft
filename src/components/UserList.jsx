import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
    const [users, setUser] = useState([]);
    const [paginas, setPaginas] = useState();
    const [paginaAtual, setPaginaAtual] = useState();
    const [ant, setAnt] = useState();
    const [prox, setProx] = useState();

    function toDateISO(dateStr) {
        return dateStr.split('/').reverse().join('-');
    }
   
    useEffect(() => {
        axios.get('http://localhost:3333/users').then(result => {
            setUser(result.data.result);
            setPaginas(result.data.pages);
            setPaginaAtual(result.data.page);
            setAnt(result.data.page - 1);
            setProx(result.data.page + 1);
        })

    }, []);

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day,month,year].join('/');
    }

    const handlePaginação = (page) => {
        axios.get(`http://localhost:3333/users?page=${page}`).then(result => {
            setUser(result.data.result);
            setPaginas(result.data.pages);
            setPaginaAtual(result.data.page);
            setAnt(result.data.page - 1);
            setProx(result.data.page + 1);
        })
    }

    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th>Data de Criação</th>
                    <th className="text-center">Nome</th>
                    <th className="text-center">Sobrenome</th>
                    <th className="text-center">Username</th>
                    <th className="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{formatDate(user.datacriacao)}</td>
                            <td className="text-center">{user.nome}</td>
                            <td className="text-center">{user.sobrenome}</td>
                            <td className="text-center">{user.username}</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${user.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/details/${user.id}`} className="btn btn-secondary">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/delete/${user.id}`} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

            
        </table>
        <div>
            <nav aria-label="Navegação de página exemplo" style={{display: "flex", justifyContent: 'center'}}>
            <ul className="pagination">
                { ant != 0 &&  <li className="page-item"><a className="page-link" href={'#?page='+ant} onClick={()=>handlePaginação(ant)}>Anterior</a></li> }
                <li className="page-item"><a className="page-link" href={'#?page='+paginaAtual} onClick={()=>handlePaginação(paginaAtual)}>{paginaAtual}</a></li>
                { prox != paginas &&  <li className="page-item"><a className="page-link" href={'#?page='+prox} onClick={()=>handlePaginação(prox)}>Próximo</a></li> }
            </ul>
            </nav>
        </div>
        </>
    );
}


export default UserList;
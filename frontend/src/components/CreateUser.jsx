import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const CreateUser = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3333/users', data).then(result => {
            props.history.push("/");
        })
    };

    
    return (
        <div className="card py-4">
            <div className="card-body">
                <h5 className="card-title">Novo Post</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="nome" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.nome && 'Nome inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Sobrenome</label>
                            <input type="text" className="form-control" name="sobrenome" autoComplete="false" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.sobrenome && 'Sobrenome inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="username" autoComplete="false" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.username && 'Username inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" name="senha" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.senha && 'Senha inválido'}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
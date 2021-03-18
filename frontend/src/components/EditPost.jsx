import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();
    

    useEffect(() => {
        axios.get(`http://localhost:3333/users/${id}`).then(result => {
            setValue("id", result.data.result[0].id);
            setValue("nome", result.data.result[0].nome);
            setValue("sobrenome", result.data.result[0].sobrenome);
            setValue("senha", result.data.result[0].senha);
        })

    }, [id]);

    const onSubmit = data => {
        axios.put(`http://localhost:3333/users/${id}`, data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Usuario</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" readOnly className="form-control"  name="id" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="nome"   ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.nome && 'Nome inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Sobrenome</label>
                            <input type="text" className="form-control" name="sobrenome"  ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.sobrenome && 'Sobrenome inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="text" className="form-control" name="senha"  ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.senha && 'Senha inválido'}</small>
                        </div>

                        <Link to="/" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Salvar <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPost;
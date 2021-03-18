import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Logo.css'

import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';


const App = () => {
    return (
        <BrowserRouter>
             <header className='header d-none d-sm-flex flex-column'>
                <aside className='logo'>
                        <img src="http://www.adsoft.com.br/mensagemsiaf/img/logo-adsoft.png" alt='logo' />
                </aside>
            </header>
            <div className="btn-group pull-right py-4 px-4">
                <Link to="/" className="btn btn-secondary">
                <i className="fa fa-users"></i>  Usuários
                </Link>
                <Link to="/create" className="btn btn-success">
                <i className="fa fa-plus"></i>   Cadastrar usuários 
                </Link>
            </div>
            
            <div className="container-fluid">
                <br />
                <Route path="/" exact component={UserList}></Route>
                <Route path="/create" exact component={CreateUser}></Route>
                <Route path="/details/:id" exact component={UserDetails}></Route>
                <Route path="/delete/:id" exact component={DeleteUser}></Route>
                <Route path="/edit/:id" exact component={EditUser}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
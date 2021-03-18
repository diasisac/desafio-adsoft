import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Logo.css'
//import logo from '../public/assets/img/adsoft.png'

import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import DeletePost from './components/DeletePost';
import EditPost from './components/EditPost';

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
                <Route path="/" exact component={PostList}></Route>
                <Route path="/create" exact component={CreatePost}></Route>
                <Route path="/details/:id" exact component={PostDetails}></Route>
                <Route path="/delete/:id" exact component={DeletePost}></Route>
                <Route path="/edit/:id" exact component={EditPost}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
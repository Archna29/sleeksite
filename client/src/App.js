import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import './App.css';
import {BrowserRouter,Route}from 'react-router-dom';
function App() {
  return (
    <div className="App ">
     
    <BrowserRouter>
    <Nav/>
    <Route path='/' exact component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/about' component={About}/>
</BrowserRouter>

    </div>
  );
}

export default App;

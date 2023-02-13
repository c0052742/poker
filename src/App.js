import './App.css';
import React, {Component} from "react";
import {Route, Routes,Link} from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterPage from './Pages/register/Register';
import LoginPage from './Pages/login/Login';
import StatPage from './Pages/Stats';
import { Navbar } from './Components/Navbar/Navbar';

class App extends Component{

  render(){
    return  ( 
    <div>
     <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/stats' element={<StatPage/>}/>
    </Routes>
    <div className="content">
       
    </div>
 
  </div>
);
  }
}

export default App;

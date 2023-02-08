import './App.css';
import React, {Component} from "react";
import {Route, Routes,Link} from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignPage from './Pages/Signin';
import LoginPage from './Pages/Login';
import { Navbar } from './Components/Navbar/Navbar';

class App extends Component{

  render(){
    return  ( 
    <div>
     <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/sign' element={<SignPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    <div className="content">
       
    </div>
 
  </div>
);
  }
}

export default App;

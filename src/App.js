import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import MyCart from "./components/MyCart";
import AdminLogin from "./components/AdminLogin";
import Login from "./components/Login";
import React, { useState ,useEffect} from 'react';


function App() {
  const [token, setToken] = useState(null);
  const [login, setLogin] = useState(false);
  const [admin,setAdmin] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    if(token){
      setLogin(true);
    }
    
  }, [setToken,setLogin]);

  return (
    <BrowserRouter>
    <Header/>
    <Routes>                                                                 
      <Route path="/" element={<Home  login={login} setLogin={setLogin} admin={admin}/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/mycart" element={<MyCart token={token}/>} />
      <Route path="/adminlogin" element={<AdminLogin setLogin={setLogin} setAdmin={setAdmin}/>} />
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;

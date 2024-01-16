import React from 'react';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';

export default function Header() {
  const [login,setLogin] = useState("Login");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogin("Logout")
      
    }
  }, [setLogin]);

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    window.location.reload();
    // Update the login state to 'Login'
    setLogin('Login');
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LaptopPlaza
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center" >
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          <div className="d-flex align-items-center my-2">


            
            <Link className="btn btn-outline-info mx-2" to="/mycart">MyCart</Link>
            <Link className="btn btn-outline-info mx-2" to="/login">Login</Link>
            
            
          </div>
        </div>
      </div>
    </nav>
  );
}

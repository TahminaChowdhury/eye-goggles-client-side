
import React from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {

  const {user,logout} = useAuth();

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container py-3">
        <span className="logo">EyeGoggles</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/explore">Explore</NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/contactus">Contactus</NavLink>
            </li>
          </ul>
          {
            user?.email ? 
            <div>
              <NavLink to="/dashboard">Dashboard</NavLink>
                <button onClick={logout} className="logout-btn rounded-pill px-3 py-1 fw-bold">Logout</button>
            </div>
            :
            <NavLink to="/login">Login</NavLink>
          }
          <NavLink to="/signup">SignUp</NavLink>
        </div>
      </div>
    </nav>
    );
};

export default Navigation;
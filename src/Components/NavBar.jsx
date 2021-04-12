import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <AppBar position="static" className="navBar">
        <Toolbar>
      
          <ul className="nav-ul" >
              <li style={{flex: '1'}} ><NavLink  activeClassName="active" exact to="/">Inicio</NavLink ></li>
              <li style={{flex: '1'}}> <NavLink activeClassName="active"exact to="/catalogo">Catalogo</NavLink></li>
              <li style={{flex: '14'}}>
                  <svg width="68" height="39" viewBox="0 0 68 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8222 0L0 39H26.7471L22.9799 30.81H13.5619L20.7196 11.7L30.891 39H42.5693L25.9937 0H15.8222Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4117 0.39V15.21L45.5831 38.22V28.86H58.3916C70.8233 25.35 71.5768 3.51 58.3916 0.78C49.953 0.468 39.5556 0.39 35.4117 0.39ZM45.9598 19.89V9.36H54.6244C60.2752 12.09 57.2614 19.89 54.6244 19.89H45.9598Z" fill="white"/>
                <path d="M15.8222 0L0 39H26.7471L22.9799 30.81H13.5619L20.7196 11.7L30.891 39H42.5693L25.9937 0H15.8222Z" stroke="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4117 0.39V15.21L45.5831 38.22V28.86H58.3916C70.8233 25.35 71.5768 3.51 58.3916 0.78C49.953 0.468 39.5556 0.39 35.4117 0.39ZM45.9598 19.89V9.36H54.6244C60.2752 12.09 57.2614 19.89 54.6244 19.89H45.9598Z" stroke="black"/>
            </svg>
              </li>
              <li style={{flex: '1'}}> <NavLink activeClassName="active"exact to="/prueba">Icono</NavLink></li>
              <li style={{flex: '1'}}> <NavLink activeClassName="active"exact to="?F">↓</NavLink></li>
            </ul>
    
          
            

         
        </Toolbar>
      </AppBar>
    )
}

export default NavBar

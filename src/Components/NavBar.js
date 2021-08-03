import React, { Fragment } from 'react';

import Cart from '../img/cart.svg';
import Logo from '../img/logo.png';

const Navbar = () => {
    return (  
        <Fragment  >
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <img src={Logo} style={{margin:20, padding: 10 }}/>
  
 
    
  <div class="collapse navbar-collapse" id="navbarNav" style={{ padding: 10, display: "flex", justifyContent:"space-around", alignItems: 'center',  }}>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio<span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tienda</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Ofertas</a>
      </li>
    </ul>
  </div>
  <img src={Cart} style={{margin:20, padding: 10, width:"70px" }}/>
</nav>

        </Fragment>
    );
}
 
export default Navbar;
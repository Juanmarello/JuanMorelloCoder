import './styles.css';

import Item from './Api/Item';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/NavBar';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render( <div className='content'>
      <h3>Desafío 3</h3>
      <div>
      <Navbar  />
      </div>
      <div >
        <ItemListContainer greeting="Bienvenidos a nuestra tienda"/>
        <hr />
        <div className="singleProduct"><ItemCount className="counterContent"></ItemCount>
        <Item />
        </div>
        
      </div>

      
      
      

    </div>, document.getElementById('root'));
       
       

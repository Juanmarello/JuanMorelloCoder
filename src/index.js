import './styles.css';

import ItemCount from './Components/ItemCount';
import ItemDetailContainer from'./Components/ItemDetailContainer';
import ItemList from './Api/ItemList';
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
        <ItemListContainer greeting="Bienvenidos a nuestra tienda" items="items"  />
        <hr />
        <div className="singleProduct"><ItemCount className="counterContent"></ItemCount>
        <ItemList />
        </div>
        <ItemDetailContainer />
      </div>

      
      
      

    </div>, document.getElementById('root'));
       
       

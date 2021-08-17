import React, { useEffect, useState } from 'react';

import ItemList from '../Api/ItemList';

const products = [
  {
      id: '1',
      titulo: "Bóxer Adulto",
      descripción: "Alimento completo para perros adultos y maduros de raza Bóxer",
      precio: "2000",
      imagen: "https://cdn.royalcanin-weshare-online.io/hrma_GwB2t6cTeuULwm2/v18/ar-l-producto-boxer-adulto-breed-health-nutrition-seco?w=500&"
  },
  {
      id: '2',
      titulo: "Bóxer Junior",
      descripción: "Alimento para perros cachorros de raza Bóxer. De 2 a 15 meses de edad.",
      precio: "2400",
      imagen: "https://cdn.royalcanin-weshare-online.io/ibmd_GwB2t6cTeuU4wkr/v4/ar-l-producto-boxer-junior-breed-health-nutrition-seco?w=250&"
  },
  {
      id: '3',
      titulo: "Golden Retriever Adult",
      descripción: "Alimento para perros adultos de raza Golden Retriever – A partir de los 15 meses de edad.",
      precio: "2150",
      imagen: "https://cdn.royalcanin-weshare-online.io/oj8183oBRYZmsWpc-7eK/v5/ar-l-producto-golden-retriever-adulto-breed-healt-nutrition-seco?w=250&"
  }

];

//Promesa con setTimeOut; retorna el Array "Productos"

const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      },2000);
      
    })
}

console.log(products);
//Componente funcional contenedor de ItemList. Efecto de montaje con useEffect - y estado.

const ItemListContainer = (props) => {
      const [items, setItems] = useState([products])
      console.log({items});
      useEffect(() => {
        
        getProducts()
        
        .then((products) => setItems(products))
      },[])
      console.log({items});
  return (
    <div>
     <ItemList items={items} />
      
    </div>
  );
  
}


export default ItemListContainer;


/*const ItemListContainer = (props) => {
    
    return  (<div>
           Hola! {props.greeting}
         <ItemList></ItemList>
    </div>) ;
}
 
export default ItemListContainer;*/
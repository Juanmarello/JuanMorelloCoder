import Item from './Item';
import React from "react";

const ItemList = ({items}) => {
    //console.log({items})
    return (
        <div>
            {items.map((item) => {
                return (
                    <Item key={item.id} {...item } />
                )
            })}
        </div>
    )
}
  
   
   export default ItemList;
   
   
    /* {productos.map(product=><div>
        <h1>{product.titulo}</h1>
        <h3>{product.descripción}</h3>
        <h2 className="precio">${product.precio}</h2>
        <img src={product.imagen} alt="royal canin"/>
        </div>)}*/
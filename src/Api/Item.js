import React from "react";

const Item = ({  titulo, descripcion, precio, imagen }) => {
    return (  
        <div className="item">
            <h1>{titulo}</h1>
            <h3>{descripcion}</h3>
            <h2 className="precio">${precio}</h2>
            <img src={imagen} alt="royal canin"/>
        </div>
    );
}
 
export default Item;
/*const renderProductos = () =>{
    new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve(productos);
        }, 2000);
    });
}*/


/*const renderProductos = verProductos =>{
    return productos.map(producto =>{
        return(
            <Producto>
                id= {productos.id}
                titulo= {productos.titulo}
                descripcion= {productos.descripción}
                precio= {productos.precio}
                imagen= {productos.imagen}
            </Producto>
        );
    });
};

export default Item;*/
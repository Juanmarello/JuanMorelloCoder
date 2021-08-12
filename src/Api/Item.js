import ItemCount from "../Components/ItemCount";
import React from "react";

const productos = [
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


const Item = () => {
    return (  
        //console.log({productos.titulo}`);
        <div className="item">
            {productos.map(product=><div>
                <h1>{product.titulo}</h1>
                <h3>{product.descripción}</h3>
                <h2 className="precio">${product.precio}</h2>
                <img src={product.imagen} alt="royal canin"/>
                </div>)}
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
import React from 'react'

const ItemDetail = (descripcion, precio, imagen) => {
    return (
        <div className="detailContainer">
            <h3>{descripcion}</h3>
            <h2 className="precio">${precio}</h2>
            <img src={imagen} alt="royal canin"/>
        </div>
    )
}


export default ItemDetail;
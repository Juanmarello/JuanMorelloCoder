import Cart from '../img/cart.svg';
import React from 'react';

const CartWidget = (prop) => {
    return ( <div>
<img src={Cart} style={{margin:20, padding: 10, width:"70px" }}/>
    </div> );
}
 
export default CartWidget;
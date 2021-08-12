import React from 'react';
import imgproduct from '../img/Bulldog-frances.jpg';

class ItemCount extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {counter: 0};
    }
    
    incrementar(){
        this.setState(prevState =>({
            counter: prevState.counter + 1}))
    }

    decrementar(){
        this.setState({
            counter: this.state.counter - 1
        }

        );
    }
    
    render(){
         return(
             <div className="product">
                <h3>Royal Canin Bulldog frances Adulto</h3>
                <img src={imgproduct} style={{ padding: 10, width:"200px" }} alt="Royal canin" />
                <button onClick={this.incrementar.bind(this)}>+</button> 
                <button onClick={this.decrementar.bind(this)}>-</button>
                <p>Cantidad: {this.state.counter} </p>
             </div>
         );
     }
     
}
export default ItemCount;
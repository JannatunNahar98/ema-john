import React from 'react';
import { Link } from 'react-router-dom';
import'./Cart.css';
const Cart = (props) => {
    const cart=props.cart;
    //const total= cart.reduce((total,prd)=>total+prd.price,0)
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price*product.quantity;
        
    }
    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    const tax=(total/10);
    const grandTotal=(total+shipping+tax+Number(tax)).toFixed(2);
    const formateNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>product Price:{formateNumber(total)}</p>
            <p>Shipping Cost:{shipping}</p>
            <p>Tax+VAT:{formateNumber(tax)}</p>
         <p>Total Price:{grandTotal}</p>
         <br/>
         {props.children}
         
        </div>
    );
};

export default Cart;
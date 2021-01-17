import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const[cart,setCart]=useState([]);
    const [orderPlace,setOrderPlace]=useState(false);
    const history=useHistory();
    const handleProceedCheckout=()=>{
        history.push('/shipment')
    }
    const removeItem=(productKey)=>{
    
        const newCart=cart.filter(pd=>pd.key!==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{

        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);

        const cartProducts=productKeys.map(key=>{

            const product = fakeData.find(product=>product.key === key);
            product.quantity=savedCart[key];

            return product;
        });
        //console.log(cartProducts);
        setCart(cartProducts);
    },[]);
    let thankYou;
            if(orderPlace)
            {
            thankYou = <img src={happyImage} alt=""/>
            }
    return (
        <div className="shop-container">
            
         <div className="product-container">
         {
                cart.map(pd=><ReviewItem 
                    key={pd.key}
                    removeItem ={removeItem}
                    product={pd}></ReviewItem>)
            }
            {
                thankYou
            }
           
         </div>
         <div className="cart-container">
             <Cart cart={cart}>
                
                <button onClick={handleProceedCheckout} className="main-button">Proceed checkout</button>

             </Cart>

         </div>

        </div>
    );
};

export default Review;
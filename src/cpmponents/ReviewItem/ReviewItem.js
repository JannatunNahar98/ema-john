import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name,quantity,key,price}=props.product;
    const reviewItemStyle={
        borderBottom:'1px solid gray',marginBottom:'5px',paddingBottom:'5px',marginLeft:'5px'
    }

    return (
        <div style={reviewItemStyle} className="reviewItem">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
         <p><small>${price}</small></p>

            <br/>
            <button className="main-button"
             onClick={()=>props.removeItem(key)}
            
            >Remove</button>
        </div>
    );
};

export default ReviewItem;
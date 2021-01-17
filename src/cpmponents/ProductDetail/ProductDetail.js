import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Prod from '../Product/Prod';

const ProductDetail = () => {
    const {ProductKey}=useParams()
    const product=fakeData.find(pd=>pd.key===ProductKey);
    console.log(product);
    return (
        <div>
            <h1>{ProductKey} product deatil comming sooooooooon</h1>
            <Prod showAddToCart={false} product={product}></Prod>
        </div>
    );
};

export default ProductDetail;
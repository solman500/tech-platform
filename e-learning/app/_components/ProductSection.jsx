// ProductSection.js
'use client'
import React, { useEffect, useState } from 'react';
import ProductApi from '../_utils/ProductApi';
import ProductList from './ProductList';

const ProductSection = () => {
    const[productList,setProductList]=useState([]);

    useEffect(() => {
        getLatestProducts_();
         // Call the function directly
       
    }, []);
    
    const getLatestProducts_ = () => {
        ProductApi.getLatestProducts().then((res) => {
            console.log(res.data.data);
            setProductList(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (

        <div className='px-10 md:px-20 '>
            <h2 className='my-3'>Our Lates Products </h2>
            <ProductList productList={productList}/>
        </div>
    );
};

export default ProductSection;

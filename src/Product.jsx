import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom';

const product = () => {

    const params = useParams();

    console.log(params);

    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/product/${params.productId}`);
        const data = await response.json();
        return data;
    };


    const {
        isLoading, 
        error, 
        data: product,
    } = useQuery({
            queryKey: ["product, params.productId"], 
            queryFn: fetchProduct, 
            // staleTime: 10000
        });


        if(isLoading) {
            return <h3>Loading...</h3>
        }
    
        if(error) {
            return <h3>Error: {error.message}</h3> 
        }


  return <div>Product: {product.title}</div>
}

export default product

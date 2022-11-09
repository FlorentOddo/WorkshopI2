import React, { useCallback } from 'react';
import { addToBasket } from '../api/api';
import './style.scss'

type ProductProps = {
  name: string
}

export const Product = () => {
  const handleAddToCart = useCallback(() => {
    // console.log(props.name);
    // addToBasket(e.target.value);
  },[]);
  

  return (
  <>
    <button onClick={handleAddToCart}>Add to cart</button>
  </>
  );
}
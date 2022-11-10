import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbar.css'


export const SearchBar = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>();
  const [selectedProd, setSelectedProd] = useState<Product>();

  useEffect(() => {
    fetch("/product/name", {
      method: "POST", 
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify({name:""})
    }).then(res => res.json()).then(data => {
      data.map((product: any) => {
        return {
          ...product, 
          quantity: 0, 
          price: 0
        }
      });
      setProducts(data);
    })
  }, []);

  const handleSelect = useCallback((e:any) => {
    const product = products?.find(prod => prod.name === e.target.value);
    setSelectedProd(product);
  }, [products]);

  const handleSubmit = useCallback((event: any) => {
    event?.preventDefault();
    if(selectedProd){
      navigate('product/' + selectedProd.idproduct, {state: selectedProd})
    }
  },[selectedProd, navigate]);

  const handleCart = useCallback(
    () => {
      navigate('cart')
    },
    [navigate],
  )
  
  
  return (
    <>
      <div className="container">
        <div className="row">
          <form action="submit" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" list="data" onChange={handleSelect} placeholder="Pate à tartiner nutella..."/>
              <datalist id="data">
                {products?.map((item) =>
                  <option key={item.idproduct} value={item.name} />
                )}
              </datalist>
            </div>
          </form>
          <div><button onClick={handleCart}>Panier</button></div>
        </div>
      </div>
    </>
  );
}
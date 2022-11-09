import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbar.css'

type Product = {
  idproduct: string,
  name: string,
  description: string
}
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
    }).then(res => res.json()).then(data => setProducts(data))
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
              <button className='searchButton'>
                <svg className="bi bi-search" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
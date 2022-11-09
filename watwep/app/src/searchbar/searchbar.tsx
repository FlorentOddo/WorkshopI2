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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
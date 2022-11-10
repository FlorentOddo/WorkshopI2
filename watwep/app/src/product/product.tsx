import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToBasket, getAllProducts } from '../api/api';
import './style.scss'

export const Product = () => {
  const [product, setProduct] = useState<Product>();
  const [betterProducts, setBetterProducts] = useState<Product[]>();
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    setProduct(location.state);
  }, [location.state])

  useEffect(() => {
    if(product){
      console.log("🚀 ~ file: product.tsx ~ line 17 ~ useEffect ~ product", product);
      const allPrpdu = getAllProducts();
      console.log("🚀 ~ file: product.tsx ~ line 19 ~ useEffect ~ allPrpdu", allPrpdu);
      const betterProducts = allPrpdu.filter((prod) => prod.ecoscore < product.ecoscore && prod.groupe === product.groupe).sort((prod) => prod.ecoscore - product.ecoscore);
      setBetterProducts(betterProducts);
    }
  }, [product]);

  const handleAddToCart = useCallback(() => {
    console.log(product);
    if (product) {
      addToBasket(product);
    }
  }, [product]);

  const h = useCallback((id: number) => {
    navigate('/');
    navigate('/product/' + id);
  }, [navigate]);


  return (
    <>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">

                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img src={product?.url} width="60" alt="" /></div>
                </div>

              </div>
              <div className="details col-md-6">
                <div>
                  <h3 className="product-title">{product?.name}</h3>
                  <button onClick={handleAddToCart}> Add to cart</button>
                </div>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p className="product-description">{product?.description}</p>
                <h4 className="price">Prix : <span>{(product?.idproduct ? 1.80 * +product.idproduct : 1.80).toFixed(2)}€</span></h4>
                <p className="vote"><strong>9{product?.idproduct}%</strong> of buyers enjoyed this product! <strong>({product?.idproduct ? +product?.idproduct * 87 : 87} votes)</strong></p>

                <h5 className="colors">Score-Eco: {product?.ecoscore}</h5>
                <div>
                  <span className="color green "></span>
                  <span className="color yellow " ></span>
                  <span className="color orange"></span>
                  <span className="color red">X</span>
                </div>

                <div id="flag.ecoscore.disabled" className="product-badge-anchor">
                  <div className="product-badge-anchor__wrapper">
                    <div className="product-badge-anchor__content">
                      <div className="product-badge-anchor-heading">
                        {/* <h3 className="title">Score-Eco </h3> */}
                        <br />
                      </div>
                      <div className="product-badge-anchor-content">
                        <div className="rich-text">
                          <p>Le Score-Eco vous indique l’impact sur l'environnement des produits alimentaires. Il a été élaboré pour favoriser une alimentation plus durable.<br /><br />
                            La méthode de calcul estime l’impact de chaque étape de la vie d’un produit (production, transport, vente en magasin, cuisine, recyclage des emballages) sur la pollution de l'environnement.
                          </p>
                        </div>
                        <div className="product-badge-anchor__ecoscore">
                          <div className="rich-text">
                            <div>Elle prend notamment en compte :<br />
                              <ul>
                                <li>le mode de production</li>
                                <li>le transport</li>
                                <li>l’origine géographique des ingrédients</li>
                                <li>la recyclabilité de l’emballage</li>
                                <li>l’impact sur les espèces menacées</li>
                              </ul>
                              <p>
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                      <h3>Autres suggestions</h3>
                    <div className='d-flex'>
                      {betterProducts?.map((item, index) => 
                        <div className='p-2' key={index} onClick={() => h(+item.idproduct)}>
                          <div>
                            <img src={item.url} width="80" alt="" />
                          </div>
                          <div>
                            <div>{item.name}</div>
                            <div>score eco : {(item.ecoscore).toFixed(2)}</div>
                          </div>
                        </div>
                      )}
                    </div>
        </div>
      </div>

    </>


  );
}
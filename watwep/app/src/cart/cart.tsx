import React, { useCallback } from 'react';
import { addToBasket } from '../api/api';
import './style.scss'

type ProductProps = {
  name: string
}

export const Cart = () => {
  const handleAddToCart = useCallback(() => {
    // console.log(props.name);
    // addToBasket(e.target.value);
  },[]);
  

  return (

    <>
<h1 className='m-4'>Panier recapitulatif</h1>

<div className="shopping-cart">

  <div className="column-labels">
    <label className="product-image">Image</label>
    <label className="product-details">Product</label>
    <label className="product-removal">Remove</label>
  </div>

  <div className="product">
    <div className="product-image">
      <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"/>
    </div>
    <div className="product-details">
      <div className="product-title">Barre bounty</div>
      <p className="product-description">Bounty®, c'est un subtil mélange de noix de coco et de délicieux chocolat au lait pour une texture à la fois moelleuse et croustillante.</p>
    </div>
    <div className="product-details">
      <div className="product-title">Impact energetique et ecologique</div>
      <p className="product-description">Vous êtes nombreux à apprécier le goût unique du Nutella sur une tranche de pain mais il existe aussi beaucoup d’autres recettes originales à essayer ! Pourquoi ne pas laisser place à votre créativité et tenter l’expérience avec Nutella ? Essayez quelque chose de nouveau pour réveiller votre enthousiasme !</p>
    </div>

    <div className="product-removal">
      <button className="remove-product">
        Supprimer
      </button>
    </div>
  </div>

  <div className="product">
    <div className="product-image">
      <img src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png"/>
    </div>
    <div className="product-details">
      <div className="product-title">Pot nutella</div>
      <p className="product-description">Vous êtes nombreux à apprécier le goût unique du Nutella sur une tranche de pain mais il existe aussi beaucoup d’autres recettes originales à essayer ! Pourquoi ne pas laisser place à votre créativité et tenter l’expérience avec Nutella ? Essayez quelque chose de nouveau pour réveiller votre enthousiasme !</p>
    </div>    
    <div className="product-details">
      <div className="product-title">Impact energetique et ecologique</div>
      <p className="product-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
    </div>

    <div className="product-removal">
      <button className="remove-product">
      Supprimer
      </button>
    </div>
  </div>

  <div className="totals">
    <div className="totals-item">
      <label>Total des emissions CO2 eq/kg</label>
      <div className="totals-value" id="cart-tax">19.64 $</div>

    </div>
    <div className="totals-item">
      <label>Equivalent en km avec un vehicule diesel</label>
      <div className="totals-value" id="cart-tax">21 km </div>
    </div>
  </div>
      
      <button className="checkout">Checkout</button>

</div>    </>
  

    );
}
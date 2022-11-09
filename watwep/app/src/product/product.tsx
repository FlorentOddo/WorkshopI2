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

<div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
						</div>

						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">POULER CUIT</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">Tres bon pouler</span>
						</div>
						<p className="product-description">Poulet fermier d'Auvergne. Poulet nourri sans OGM (0,9%). Produit frais classe A. Prêt à cuire. Eviscéré sans abats.</p>
						<h4 className="price">current price: <span>$180</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>

						<h5 className="colors">ScoreEco:
            <span className="color green " >X</span>
            <span className="color yellow " ></span>
							<span className="color orange"></span>
							<span className="color red"></span>
						</h5>

            <div id="flag.ecoscore.disabled" className="product-badge-anchor"><div className="product-badge-anchor__wrapper"><div className="product-badge-anchor__content"><div className="product-badge-anchor-heading"><h3 className="title">
  Eco-Score
</h3></div> <div className="product-badge-anchor-content"><div className="rich-text"><p>L'Eco-score vous indique l’impact sur l'environnement des produits alimentaires. Il a été élaboré pour favoriser une alimentation plus durable.<br/><br/>La méthode de calcul estime l’impact de chaque étape de la vie d’un produit (production, transport, vente en magasin, cuisine, recyclage des emballages) sur la pollution de l'environnement.</p></div> <div className="product-badge-anchor__ecoscore"><div className="rich-text"><div>Elle prend notamment en compte :<br/><ul><li>le mode de production</li><li>le transport</li><li>l’origine géographique des ingrédients</li><li>la recyclabilité de l’emballage</li><li>l’impact sur les espèces menacées</li></ul><p>Cet Eco-score est en gris: en raison du manque d’informations nécessaires, il est impossible de calculer l’Eco-score de ce produit.</p></div></div></div> <p className="paragraph product-badge-anchor__links"><a href="/engagements/eco-score" target="_blank" className="ds-link ds-link--small "><span className="ds-link__icon ds-link__icon--chevron-right"></span> <span className="ds-link__label">En savoir plus</span></a></p></div></div> <div className="product-badge-anchor__icon-wrapper"><div className="product-badge-anchor__icon"><div className="product-badge-anchor__svg product-badge-anchor__ecoscore"></div></div></div></div></div>

					</div>
				</div>
			</div>
		</div>
	</div>

    </>
  

    );
}
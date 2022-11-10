let basket: Product[] = [];

export function getBasket() {
  return basket;
}

export function addToBasket(product: Product){
  product.quantity++;
  basket.push(product);
  return basket;
}

export function incrementProduct(product: Product){
  product.quantity++;
  const i = basket.findIndex(prod => prod.name === product.name);
  basket[i].quantity++;
  return basket;
}

export function decrementProduct(product: Product){
  product.quantity--;
  const i = basket.findIndex(prod => prod.name === product.name);
  basket[i].quantity--;
  return basket;
}

export function removeFromBasket(product: Product){
  const idToRemove = basket.findIndex(prod => product.name === prod.name);
  basket = basket.splice(idToRemove, 1);
  return basket;
}

export function clearBasket(){
  basket = [];
  return basket;
}



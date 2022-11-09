type Product = {
  name: string,
  price: number
}

let basket: Product[] = [];

export function getBasket() {
  return basket;
}

export function addToBasket(product: Product){
  basket.push(product);
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



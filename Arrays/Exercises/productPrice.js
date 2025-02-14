let prices = [
  { product: 'mouse', price: 20 },
  { product: 'monitor', price: 300 },
  { product: 'keyboard', price: 120 },
  { product: 'ssd', price: 180 },
  { product: 'headset', price: 90 },
  { product: 'joystick', price: 200 },
];

function price(element) {
  let productToLower = element.toLowerCase();
  let found = prices.find((e) => e.product === productToLower);
  if (found) {
    return `El precio del producto es: $${found.price}`;
  }
}

console.log(price('Headset'));

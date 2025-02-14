// street
// city
// zipcode
// showAdress(address)

obj = {
  street: 'Señor Lopez',
  city: 'Pilar',
  zipCode: 5971,
};

showAdress(obj);

// function showAdress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

function showAdress(address) {
  let arrayAddress = Object.keys(address);
  console.log(arrayAddress);

  for (let i = 0; i < arrayAddress.length; i++) {
    console.log(arrayAddress[i], address[arrayAddress[i]]);
  }
}

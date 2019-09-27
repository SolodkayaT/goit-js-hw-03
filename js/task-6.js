/* eslint-disable no-restricted-syntax */
function calculateTotalPrice(arr, productName) {
  let result = 0;
  let price = 0;
  let quantity = 0;

  for (const obj of arr) {
    const keys = Object.keys(obj);
    price = obj[keys[1]];
    quantity = obj[keys[2]];

    for (const key of keys) {
      if (obj[key] === productName) {
        result = price * quantity;
      }
    }
  }
  return result;
}
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800


for (const key of keys) {
  while (obj[key] === type)do {
  message =  `Ваша транзакция найдена с типом = ${type}: ID = ${obj.id} , Сумма = ${obj.amount} .`;
  }
}
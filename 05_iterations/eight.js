//Shopping Cart Total Calculation

const cart = [
  { item: 'Apple', price: 10, quantity: 3 },
  { item: 'Banana', price: 5, quantity: 5 },
  { item: 'Orange', price: 7, quantity: 2 },
  { item: 'Mango', price: 20, quantity: 4 }
];

const TotalCost = cart.reduce( (acc, item) => acc + item.price * item.quantity, 0);
console.log(`Total Cost is: ${TotalCost}`);

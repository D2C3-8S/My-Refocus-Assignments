const store_inventory = [
  {
    item: "shampoo",
    quantity: 1,
    price_$: 3,
  },
  {
    item: "soap",
    quantity: 0,
    price_$: 2,
  },
  {
    item: "toothpaste",
    quantity: 2,
    price_$: 3,
  },
];
const new_deliveries = [
  {
    item: "shampoo",
    quantity: 5,
    price_$: 4,
    inventory_index: 0,
  },
  {
    item: "soap",
    quantity: 10,
    price_$: 2,
    inventory_index: 1,
  },
  {
    item: "toothpaste",
    quantity: 10,
    price_$: 3,
    inventory_index: 2,
  },
];
new_deliveries.forEach(processDeliveries);

function processDeliveries(items_obj) {
  store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
  store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
}
console.log(store_inventory);

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
function productSummary(items_obj) {
  const item_id = items_obj.item.slice(0, 3).toLowerCase();
  let remarks = "good";

  if (items_obj.quantity < 10) {
    remarks = "item stock is low";
  }
  let message = `itemID: ${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks:`;
  return message.concat(remarks);
}

const report_summary = store_inventory.map(productSummary);

//console.log(store_inventory);
console.log(report_summary);

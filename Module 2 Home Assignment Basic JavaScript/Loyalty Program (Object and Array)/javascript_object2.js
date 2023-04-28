let customer = { 
    
    customer_name: 'Johnny Mango',
    points: 12300,
    cart: [
    {

        item: 'shampoo',
        quantity: 2,
        price_$: 3
    },
    {
        item: 'soap',
        quantity: 2,
        price_$: 2
    },
    {
        item: 'toothpaste',
        quantity: 1,
        price_$: 3
    }
        ]
}
console.log(`Hi Mr. ${customer.customer_name} how are you today?`);
console.log(`Your current points is: ${customer.points}`);
console.log('Purchased Items:');

 let total = 0;
 let total_bill = 0;
 let points = 0;
 let total_points = 0;
 let newpoints = 1

for(let i = 0; i < customer.cart.length; i++){
       total = customer.cart[i].quantity * customer.cart[i].price_$;
       total_bill += total;
       points += customer.cart[i].quantity * newpoints;
       total_points = points + customer.points;

console.log(`${customer.cart[i].quantity}X ${customer.cart[i].item}------$${total}`);
    
} 

console.log(`Total Bill: ${total_bill}`);
console.log(`New Current Points : ${total_points}\nThank you for shopping, Have a nice day!`);

    

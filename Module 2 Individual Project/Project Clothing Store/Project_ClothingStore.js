let LoggedIn = false;
let customerId = null;

const clothing_Store = {
    shop_Name: 'Mohans RTW',
    address: 'Catanauan, Quezon',
    unique_Code: 'CQ314',

    Client_Information: [
        {
            Name: 'Marissa',
            lastName: 'Clet',
            age: 52,
            birth_day: '5.13.1971'
        }
    ],

    items: [
        {
            item_Name: 'Blue Jeans',
            category: 'casual',
            price: 500,
            stock: 30
        },
        {
            item_Name: 'Rubber Shoes',
            category: 'Sports Wear',
            price: 650,
            stock: 50
        },
        {
            item_Name: 'Dress Skirt',
            category: 'Formal Wear',
            price: 850,
            stock: 50
        }

    ]
}
// adding a client.
function addClient(info){
clothing_Store.Client_Information.push(info);
 console.log(info.Name + ' ' + info.lastName + ' ' + 'has been added on the client list.')
}
addClient({
    Name: 'Nimfa',
    lastName: 'Maracha',
    age: 53,
    birth_day: '06.25.1970' 
    
});
addClient({
    Name: 'Rosalie',
    lastName: 'Martinez',
    age: 53,
    birth_day: '06.27.1978' 
})

// Adding of an item
function addItem(item){
clothing_Store.items.push(item);
console.log(item.item_Name + ' has been added on the store.')
}
addItem({
            item_Name: 'Polo Shirt',
            category: 'Casual Wear',
            price: 400,
            stock: 267
});
addItem({
            item_Name: 'Denim',
            category: 'Jacket',
            price: 1800,
            stock: 289
})

 console.log('=============================');
 console.log(clothing_Store);


console.log('===============================');


// error messages
function showError(msg) {
    console.error(msg);
}

// Items Inventory
function add(clothing_Store){
 clothing_Store.items.forEach((item, index)=>{
    if(clothing_Store.items[index].stock <= 100){
        console.log(`stock is low on the  ${clothing_Store.items[index].item_Name} item.`);
    } else {
        console.log(`Stocks are good on the ${clothing_Store.items[index].item_Name} item.`);
   
    }
    if(clothing_Store.items[index].stock <= 0 ) {
        console.log(`Out of Stock on the ${clothing_Store.items[index].item_Name} item.`);
    }
 });
 
}

console.log('===============================');

// Adding of items that low on stocks
 let newItem = 100;
 function b(clothing_Store){
 clothing_Store.items.forEach((item, index)=> {
    if(clothing_Store.items[index].stock <= 100){
        let additem = clothing_Store.items[index].stock + newItem;
        console.log(`Additional item of ${newItem} has been added to ${clothing_Store.items[index].item_Name}
        the total item is ${additem}`);
    }
 })
}
add(clothing_Store);
console.log('==================================');
b(clothing_Store);
 
// customer login based on their name and birthday as their unique Id's.
function customerLoggedIn(name, birthday){
    clothing_Store.Client_Information.forEach((item, index)=> {
        if(item.Name == name && item.birth_day == birthday) {
            LoggedIn = true;
            customerId = index;
            console.log('Hi '  + item.Name + ' ' + item.lastName + ' Welcome to ' + clothing_Store.shop_Name);

        }

    });

    if(!LoggedIn){
        customerId = null;
        console.log('Please LogIn');
    }
 }
 console.log('===============================');
customerLoggedIn('Nimfa', '06.25.1970');


const cart = [];

// adding a purhased item to the cart.

function addToCart(index){
    if(customerId != null) {
        const item = clothing_Store.items[index];

        if(item) {
            if(item.stock > 0) {
                cart.push(item);
                item.stock --;
                console.log(`You added an item of ${item.item_Name} on your cart.`);

            } else {
                console.log(`${item.item_Name} are out of stock!`);
                
            } 
            
        }
    }
}
addToCart(0);
addToCart(2);
addToCart(4);

console.log('===============================')

let cartitem = [
    {item_Name:'Blue Jeans', quantity: 1 },
    {item_Name:'Dress Skirt', quantity: 1},
    {item_Name:'Denim', quantity: 1}
]

// confirmation of order
function confirmOrder(customerId, cartitem) {
    if(customerId !== null) {
        clothing_Store.items.forEach((value, index) => {
        
        cartitem.forEach((value, index1) => {

            if(index.index1 === clothing_Store.items[index].item_Name || cartitem[index1].item_Name) {

                if(cartitem[index1].quantity <= clothing_Store.items[index].stock) {
                
                    clothing_Store.items[index].stock -= cartitem[index1].quantity;
                }
            

                 console.log('Order confirm for ' + cartitem[index1].item_Name);

            } else {
                console.log ('Out of stock for ' + cartitem[index1].item_Name );
         }   
             
       })     
    })
  }

}
confirmOrder(customerId, cartitem);


// deduction of cart purchase from the stock.
function deduction(customerId, cartitem) {
    if(customerId !== null) {
        clothing_Store.items.forEach((value, index) => {
        
        cartitem.forEach((value, index1) => {

            if(index.index1 === clothing_Store.items[index].item_Name || cartitem[index1].item_Name) {

                    clothing_Store.items[index].stock -= cartitem[index1].quantity;

            }    
            console.log('Deduction of ' + cartitem[index1].item_Name + ' by ' + cartitem[index1].quantity + ' item from the stock');    
       }) 
      
    })
    
  }
 
}

deduction(customerId, cartitem);
console.log('==============================')

// Receipt
function receipt(customerId, cartitem, payment) {
    let tax = 0;
    let subTotal = 0;
    let total = 0;
    let change = 0;

    if(customerId !== null) {
        let a = clothing_Store.Client_Information[1].Name;
        let b = clothing_Store.Client_Information[1].lastName
        console.log(`Receipt for ${a} ${b}`);
        clothing_Store.items.forEach((value, index) => {
        
            cartitem.forEach((value, index1) => {
    
                if(index.index1 === clothing_Store.items[index].item_Name || cartitem[index1].item_Name) {
    
                   subTotal =  clothing_Store.items[index].price * cartitem[index1].quantity;    
    
                }      
           })     
        })
        tax = subTotal * 0.12;
        total = subTotal + tax;

        console.log('Subtotal: ₱' + subTotal.toFixed(2));
        console.log('Tax: ₱' + tax.toFixed(2));
        console.log('Total: ₱' + total.toFixed(2));

        if(payment >= total) {
            change = payment - total;
            console.log('Payment: ₱' + payment.toFixed(2));
            console.log('Change: ₱' + change.toFixed(2));
        }else {
            console.log('Insufficient Fund.');
        }
      }
    
    }
    

receipt(customerId, cartitem, 3000);
console.log('=====================================');
console.log('Thank you for visiting, Come Again!');
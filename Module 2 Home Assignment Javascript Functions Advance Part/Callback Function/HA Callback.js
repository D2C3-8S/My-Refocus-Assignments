/* Created here an array of numbers*/
/* A Group of customer and their ages */

const customer_group1 = [8, 12, 11, 11, 18, 24, 5, 10];
const customer_group2 = [10, 11, 11, 13, 19, 14];
const customer_group3 = [12, 12, 14];

/* Declaring a global variable 
    Amount per head */
let amount = 299;

/* Defining a discount function */
function discount(percentage, amount) {
  discounted_amount = amount - (amount * (percentage / 100));
  return discounted_amount;
}

// defining an age Checker Function
function age_checker(age) {
  if (age >= 10) {
    return true;
  } else {
    return false;
  }
}

/* Defining a calculate function to avail the discount of each 
   group base on their age and number of person each group*/

function calculate(customer_group = [], discount_func = {}) {

  const group_count = customer_group.length;
  let sub_total = amount * group_count;

  if (group_count < 6) {
     console.log(`Sorry, No Discount. Bill: ${sub_total}`);
   }

  const all_aged_10_and_above = customer_group.every(age_checker);
  let discount = 0;
  let grand_total;
  if (all_aged_10_and_above == true) {
    discount = 15;
    grand_total = discount_func(discount, sub_total);
  }else  {
    discount = 10;
    grand_total = discount_func(discount, sub_total);
  }
  return `${discount}% discount. Bill: ${grand_total}`;
}
console.log('Customer Group 1');
console.log(calculate(customer_group1, discount));
console.log('==================================');
console.log('Customer Group 2');
console.log(calculate(customer_group2, discount));
console.log('==================================');
console.log('Customer Group3 ');
console.log(calculate(customer_group3, discount));


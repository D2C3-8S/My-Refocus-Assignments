let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20
}
function showData(obj){
    console.log('First Number: ' + obj.num1);
    console.log('second Number: ' + obj.num2);
    console.log('The Sum: ' + obj.sum);
    console.log('The difference: ' + obj.difference);
    console.log('The product: ' + obj.product);
    console.log('The quotient: ' + obj.quotient);
}

function newSetOfNumbers(num1, num2){
  
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum = add(num1, num2);
    obj.difference = subtract(num1, num2);
    obj. product = multiply(num1, num2);
    obj. quotient = divide(num1, num2);
}

function add(num1, num2){
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2){
 let result = num1 - num2;
 return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

function divide(num1, num2){
    let result = num1 / num2;
    return result;
}


showData(obj);
console.log('======================');
newSetOfNumbers(200, 10);
showData(obj);
console.log('======================');
newSetOfNumbers(500, 20);
showData(obj);
//1
var x = 1;
var y = 1;

var  x= 100;
var y;

console.log(x);
console.log(y);

//2
var x =1;
if (true) {
    var x = 10;
}
console.log(x);

//3
var i = 10;
for(var i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

//4
console.log(foo);

foo = 123;

console.log(foo);

var foo;

//5
var foo = 123;
var foo = 456;

let bar = 123;
let bar = 456;

//6
let foo = 1;

{
    let foo = 2;
    let bar = 3;
}

console.log(foo);
console.log(bar);

//7
console.log(foo);
let foo;

//8
console.log(foo);

var foo;
console.log(foo);

foo = 1;
console.log(foo);

//9
console.log(foo);

let foo;
console.log(foo);

foo = 1;
console.log(foo);

//10
let foo = 1;
{
    console.log(foo);
    let foo = 2;
}

let foo = 1;
{
    console.log(foo);
    let foo = 2;
}

//11
var x = 1;
y = 2;
function foo() {}

console.log(window.x);
console.log(x);

console.log(window.y);
console.log(y);

console.log(window.foo);
console.log(foo);

//12
let x = 1;

console.log(window.x);
console.log(x);

//13
const foo = 1;

//14
const foo;

//15
{
    console.log(foo);
    const foo = 1;
    console.log(foo);
}

console.log(foo);

//16
const foo = 1;
foo = 2;

//17
let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice);

//17
const Tax_RATE = 0.1;
let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + (preTaxPrice * Tax_RATE)

console.log(afterTaxPrice);

//18
const person = {
    name: 'Lee'
};

person.name = 'Kim';

console.log(person);
//01
var person = {
    name : 'Lee',
    sayHello: function () {
        console.log(`Hello! My name s ${this.one}`)
    }
};

console.log(typeof person);
console.log(person);

//02
var empty = {}
console.log(typeof empty)

//03
var person = {
    name = 'Lee',
    age : 20
};

//04
var person = {
    firstName: 'Ung-mo',
    'last-name': 'Lee'
};

console.log(person);

//05
var person = {
    firstName: 'Ung-mo',
    last-name: 'Lee'
};

//06
var obj = {};
var key = 'Hello';

obj[key] = 'world'

console.log(obj);

//07
var foo = {
    '' : ''
};

console.log(foo);

//08
var foo = {
    0 : 1.
    1 : 2,
    2 : 3
};

console.log(foo);

//09
var fooo = {
    var: '',
    function: ''
};

console.log(foo);

//10

var foo = {
    name : 'Lee',
    name : 'Kim'
};

console.log(foo);

//11
var circle  = {
    radius: 5,
    getDiameter: function() {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter())

//12
var person = {
    name : 'Lee'
};

console.log(person.name);


//13
console.log(person['name']);

var person = {
    name : 'Lee'
};

console.log(person[name])

//14
var person = {
    name: 'Lee'
};

console.log(person.age);


//15
var person = {
    'last-name' : 'Lee',
    1 : 10
};

person.'last-name' ;
person.last-name;

person[last-name];
person['last-name'];

person.1;
person.'1';
person[1];
person['1'];

//16
var person = {
    name : 'Lee'
};

person.name = 'Kim';

console.log(person);

//17
var person = {
    name: 'Lee'
};

person.age = 20;

console.log(person);

//18
var person = {
    name: 'Lee'
};

person.age = 20;

delete person.age;

delete person.address;

console.log(person);

//19
var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj);

//20;
let x = 1,  y =2;

const obj = { x, y };

console.log(obj);

//21
var prefix = 'prop';
var i = 0;

var obj = {};

obj[prefix + `-` + ++i] = i;
obj[prefix + `-` + ++i] = i;
obj[prefix + `-` + ++i] = i;

console.log(obj);

//22
const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};

console.log(obj);

//23
var obj  = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi' + this.name);
    }
};
obj.sayHi();

//24
var obj = {
    name: 'Lee',
    sayHi() {
        console.log('Hi' + this.name);
    }
};
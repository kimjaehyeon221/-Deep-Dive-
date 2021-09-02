// 내부 슬롯과 내부 메소드 
//1
const o = {};

//o.[[prototype]]  --> Uncaught SyntaxError: Unexpected token;

o.__proto__

//2
const person = {
    name : 'Lee'
};


console.log(Object.getOwnPropertyDescriptor(person, 'name'))

//3
const person = {
    name : 'Lee'
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

//4
const person = {
    name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptors(person, 'name'));

//5
const person = {
    name: 'Lee'
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

//6
const person = {
    firstName: 'Ungmo',
    lastName: 'Lee',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(){
        [this.firstName, this.lastName] = name.split(''); 
    }
};

console.log(person.firstName + ' ' + person.lastName);

person.fullName = 'Heegun Lee';
console.log(person);

console.log(person.fullName); 

let descripter = Object.getOwnPropertyDescriptors(person, 'firstName');
console.log(descripter);

descripter =  Object.getOwnPropertyDescriptors(person, 'fullName');
console.log(descripter);

 
//7
Object.getOwnPropertyDescriptors(Object.prototype, '__prototype__');

Object.getOwnPropertyDescriptor(function() {}, 'prototype');

//8
const person = {};

Object.defineProperty(person, 'firstName' , {
    value : 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
})


Object.defineProperty(person, 'lasttName' , {
    value : 'Lee',
})

let descripter = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descripter);

descripter = Object.getOwnPropertyDescriptor(person, 'lastName')
console.log('lastName', descripter);

console.log(Object.keys(person));

person.lastName = 'Kim';

delete person.lastName;

descripter = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descripter);

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    set(name){
        [this.firstName,this.lastName] = name.split(' ');
    },
    enumerable : true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

person.fullName = 'Heegun Lee'

//9
const person = {};

Object.defineProperty(person, {
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },

    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },

        set(name){
            [this.firstName, this.lastName] = name.split(` `);
        },
        enumerable: true,
        configurable: true
    }

});

person.fullName = 'Heegun Lee';
console.log(person);

//16 
const person = { name: 'Lee'};

console.log(Object.istExtensible(person));

Object.preventExtensions(person);

console.log(Object.isExtensible(person));

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

Object.defineProperty(person, 'age', {value: 20});

//11
const person = {name : 'Lee'};

console.log(Object.isSealed(person));

Object.seal(person);

console.log(Object.isSealed(person));

console.log(Object.getOwnPropertyDescriptors(person));

person.age = 20; 
console.log(person);

delete person.name;
console.log(person);

person.name = 'Kim';
console.log(person);

Object.defineProperty(person, 'name', {configurable: true});

//10 
const person = { name: 'Lee'};

console.log(Object.isExtensible(person));

Object.preventExtensions(person);

console.log(Object.isExtensible(person));

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

Object.defineProperty(person, 'age', {value: 20});

//11
const person = {name : 'Lee'};

console.log(Object.isSealed(person));

Object.seal(person);

console.log(Object.isSealed(person));

console.log(Object.getOwnPropertyDescriptor(person))

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

person.name = 'Kim';
console.log(person);

Object.defineProperty(person, 'name', {configurable: true});

//12
const person = {name : 'Lee'};

console.log(Object.isFrozen(person));

Object.freeze(person);

console.log(Object.isFrozen(person));

console.log(Object.getOwnPropertyDescriptor(person));

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

person.name = 'Kim';
console.log(person);

Object.definepreperty(person, 'name', {configurable: true})


//13
 const person = {
     name: 'Lee',
     address: {city: 'Seoul'}
 };

 Object.freeze(person);

 console.log(Object.isFrozen(person));

 console.log(Object.isFrozen(person.address));

 person.address.city = 'Busan';

 console.log(person); 

 //14
 function deepFreeze(target){
     if(target && typeof target === 'object' && !Object.isFrozen(target)) {
         Object.freeze(target);
         Object.keys(target).forEach(key => deepFreeze(target[key]));
     }
     return target;
 }

 const person = {
     name: 'Lee',
     address: { city: 'Seoul'}
 }

 deepFreeze(person);

 console.log(Object.isFrozen(person));

 console.log(Object.isFrozen(person.address));

 person.address.city = 'Busan';

 console.log(person);
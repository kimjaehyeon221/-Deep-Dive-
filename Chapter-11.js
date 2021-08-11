//01
const o ={};
o.a = 1;
console.log(o);

//02
var str1 = '';
var str2 = 'Hello';

//03 
var str = 'Hello';
str = 'world';
  
//04
var str = 'string';
console.log(str[0]);
console.log(str.length);
console.log(str.toUpperCase());

//05
var str = 'string';
str[0] = 'S';
console.log(str);

//06
var score = 80;
var copy = score;

console.log(score);
console.log(copy);
score = 100;

console.log(score);
console.log(copy);

//07
var score = 80;
var copy = score;

console.log(score.copy);
console.log(score == copy);

//08 
var score = 80;
var copy = score;

console.log(score, copy);
console.log(score === copy);

score = 100;
console.log(score, copy);
console.log(score === copy);

//09 
var x = 10;
var copy = score;

//두 가지 평가 방식이 가능하다. 
//새로운 80을 생성(복사)해서 메모리 주소를 전달하는 방식. 이 방식은 할당 시점에 두 변수가 기억하는 메모리 주소가 다르다. 
//score의 변수값 80의 메모리 주소를 그대로 전달하는 방식, 이 방식은 할당 시점에 두 변수가 기억하는 메모리 주소가 같다. 

//10
var person = {
    name: 'Lee'
};
 

//11
var person = {
    name : 'Lee'
};

console.log(person);

//12
var person = {
    name: 'Lee'
};

//13
person.name = 'Kim';
person.address = 'Seoul';

console.log(person);

//14
//객체는 이러한 구조의 단점에 따른 부작용이 있다. 그것은 원시 값과는 다르게 여러 개의 식별자가 하나의 객체를 공유할 수 있다는 것이다. 

const o = { x: { y: 1} }
const c1 = { ... o};
console.log(c1 === o);
console.log(c1.x === o.x);

const _ = require('lodash');
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);

//15
const v = 1;
const c1 = v;
console.log(c1 === v);

const o = { x : 1};

const c2 = o;
console.log(c2 === o);

//16
var person = {
    name : 'Lee'
};

var copy = person;

//17
var person = {
    name: 'Lee';
}

var copy = person;

console.log(copy === person);

copy.name = 'Kim';

person.address = 'Seoul';

console.log(person);
console.log(copy);

console.log(person);
console.log(copy);

//자바스크립트에는 "참조에 의한 전달"은 존재하지 않고 "값에 의한 전달"만이 존재한다고 말할 수 있다. 
//"값에 의한 전달"과 "참조에 의한 전달"은 식별자가 기억하는 메모리 공간에 저장되어 있는 값을 복사해서 전달한다는 면에서 동일하다. 
//참조값과 원시값의 차이.

//18
var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2);
console.log(person1.name === person2.name);




//01
function add(x,y) {
    return x + y;
}

add(2, 5);

//02
function add(x, y) {
    return x + y;
}

//03
var result = add(1,2)
console.log(result);

//04
var f = function add(x, y) {
    return x + y;
}

//05
function add(x, y) {
    return x + y;
}

console.log(add);

console.log(add(2, 5));

/*06
function (x, y){
    return x + y;
}*/

//07
var add = function add (x,y) {
    return x  + y;
};

console.log(add(2,5))

//08
function foo() {
    console.log('bar');
}
foo();

/*(funcion bar() {console.log('bar')};
bar();*/

//09 
var add = function add (x,y) {
    return x + y;
};
console.log(add(2, 5));

//함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다. 

//10
//함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
var add = function (x, y){
    return x + y;
}

console.log(add(2, 5));

//자바스크립트의 함수는 일급 객체다. 자바스크립트의 함수는 값처럼 변수에 할당 할 수도 있고 프로퍼티 값이 될 수도 있으며 배열의 요소가 될 수도 있다. 

//11 
var add = function foo (x, y) {
    return x + y;
};

console.log(add(2, 5));

console.log(foo(2, 5));

//함수를 호출할 때는 함수 이름이 아니라 함수 객쳋를 가리키는 식별자를 사용해야 한다. 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름으로 함수를 호출할 수 없다. 

//12
console.dir(add);
console.dir(sub);
 

console.log(add(2, 5));
console.log(sun(2, 5));

function add(x, y) {
    return x + y;
};

var sub = function (x, y){
    return x - y ;
};

var add = new Function('x', 'y', 'return x + y');
console.log(add(2,5));

var add1 = (function() {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add(1, 2));

var add2 = (function(){
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
})

//15 
const add = (x,y) => x + y;
console.log(add(2, 5))

//16 
function add(x , y) {
    return x + y;
}

var result = add(1, 2);

//17 
function add (x, y){
    console.log(x, y);
    return x + y;
}

add(2, 5);

console.log(x, y);

//18
function add (x, y) {
    return x + y;
}

console.log(add(2));

//19
function add(x, y) {
    return x + y;
}

console.log(add(2, 5, 10));

//20 
function add (x, y) {
    console.log(arguments);
    return x + y;
}

add (2, 5, 10);

//21
function add (x, y) {
    return x + y;
}

//22
function add (x, y) {
    return x + y;
}

console.log(add(2));
console.log(add('a',  'b'));

//자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 
//자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다. 

//23
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이여야 합니다.')
    }

    return x + y;
}

console.log(add(2));
console.log(add('a', 'b'));

//24
function add(a, b, c){
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());  

//25
function add (a = 0, b = 0, c = 0){
    return  a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());

//26 
$.ajax ({
    method: 'Post',
    url: '/user',
    data: { id : 1, name: 'Lee'},
    cache: false
});

//27 
function multiple(x, y) {
    return x + y;
}

var result = multiple(3, 5);
console.log(result);

//28
function multiple(x, y) {
    return x + y;
    console.log('실행되지 않는다.');
}

console.log(multiply(3, 5));

//29
function foo () {
    return;
}
console.log(foo());

//30 
function foo () {
    //
}

console.log(foo());

//31
function foo() {
    return 
    x + y;
}
console.log(multiple(3, 5));

//32
/*<!DocType html>
<html>
    <body>  
        <script>    
            return;
        </script>
    </body>
</html>*/

//33
function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim'
}

var num = 100;
var person = {name: 'Lee'}

console.log(num);
console.log(person);

changeVal(num, person);
//원시 값은 원본이 훼손되지 않는다. 
console.log(num);

//객체는 원본이 훼손된다.
console.log(person);

//34
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

//35
(function foo(){
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); 

//36
/*function () {

}();*/

//37
/*function foo () {
    
}();*/

//38
/*funtcion foo(){}();*/

//39
/*();*/

//40
console.log(typeof (function f(){}));
console.log(typeof (function (){}));

//41
/*(funtcion (){...}()); 
(function (){})();
!function() {
    //
}();
+funtcion () {
    //
}(); */

//42
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res);

/*res = (funcion (a, b) {
    return a * b;
}(3, 5));*/

console.log(res);

//43
function countdown(n){
    for (var i = n; i >= 0; i--) console.log(i);
}

countdouwn(10);

//44
function countdown (n){
    if (n < 0 ) return;
    console.log(n);
    countdown( n - 1);
}

countdouwn(10);

//45
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

//46
var factorial = function foo(n){
    if(n <= 1) return 1;
    return n * factorial(n-1);
};

console.log(factorial(5));

//47
function factorial(n) {
    if (n <= 1) return 1;
    var res = n;
    while(--n) res *= n;
    return res;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

//48
function outer() {
    var x = 1;
    function inner () {
        var y = 2;
        console.log(x + y);
    }
    inner();
}

outer();

//49
function repeat(n){
    for(var i = 0; i < n; i++) console.log(i);
}

repeat(5);

//50
function repeat1(n){
    for(var i = 0; i < n; i++) console.log(i);
}

repeat1(5);

function repeat2(n){
    for (var i = 0; i < n; i++){
        if(i % 2) console.log(i);
    }
}

repeat2(5);


//51
//내부 함수 = 중첩 함수 = 헬퍼 함수
function repeat(n, f) {//고차함수 -> 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logALL = function (i){//콜백함수
    console.log(i);
};

repeat(5, logOdds);

var logOdds = function (i){
    if ( i % 2) console.log(i);
};

repeat(5, logOdds); 

//52
repeat(5, function(i){
    if (i % 2) console.log(i);
});

//53
var logOdds = function (i) {
    if (i % 2 ) console.log(i);
};

repeat(5, logOdds);

//54
document.getElementById('myButton').addEventListener('click', function) {
    console.log('button clicked!');
}

setTimeout(function () {
    console.log('1초 경과');
}, 1000);

//55
var res =[1, 2, 3].map(function (item){
    return item * 2;
});

console.log(res)

res = [1, 2, 3].filter(function (item){
    return item * 2;
})

res = [1, 2, 3].reduce(function (acc, cur){
    return acc + cur;
}, 0);

console.log(res);

//56 
var count = 0;
function increse(n){
    return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

//57 
var count = 0;
function increase () {
    return ++count;
}

increase();
console.log(count);

increase();
console.log(count);

//함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제해 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환이라 할 수 있다. 
//자바스크립트는 멀티 패러다임 언어이므로 객체지향 프로그래밍뿐만 아니라 함수형 프로그래밍을 적극적으로 활용하고 있다. 
//1
function add(x, y) {
    console.log(x, y);
    return x  + y;
}

add(2, 5);

console.log(x, y);

//2
var var1 = 1;

if (true){
    var var2 = 2;
    if(true){
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4;

    function bar() {
        var var5 = 5;
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

//3
var x ='global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);

//4
function foo() {
    var x = 1;
    var x = 2;//var 키워드가 없는 것처럼 작동한다.                                                                                                                                                                  
    console.log(x);
}
foo();
//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.

//5
function bar() {
    let x = 1;
    let x = 2;
}
//let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다. 

//6
function foo() {
    console.log('global function foo');
}

function bar() {
    function foo() {
        console.log('local function foo')
    }
    foo();
}

bar();

//7
var x = 1;

if(true) {
    var x = 10;
}

console.log(x);

//8
var i = 10;
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i)

//9
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();
bar();
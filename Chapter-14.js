//1
function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo();
console.log(x);

//2
var x = 'global';

function foo() {
    console.log(x);
    var x = 'local';
}

foo();
console.log(X);

//3
var x = 1;
var x = 100;
console.log(X);

//4
(function () {
    var foo = 10;
})

console.log(foo);

//5
var MTAPP = {};

MYAPP.name = 'Lee';

console.log(MYAPP.name);

//6
var MYAPP = {};

MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
};

//7
var Counter = (function () {
    var num = 0;
    return {
        increase(){
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
})

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());

//8
<script type = "module" src = "lib.mjs"></script>
//<script type = "module" src = "app.mjs"></script>

//9
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(X);
console.log(y);


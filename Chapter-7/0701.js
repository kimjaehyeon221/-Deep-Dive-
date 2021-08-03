//숫자 타입이 아닌 피연사자에 + - 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환된다. 
x = false 
console.log(+x);
console.log(x);

//문자열 연결 연결자 
'1' + 2; //'12'
1 + '2'; // '12'

1 + 2; // 3

// true = 1 false = 0 null = 0
// 암묵적 타입 변환, 타입 강제 변환-> 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.
1 + true; // 2
1 + false; // 1
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

//명시적 타입 변환//////////////////////////////////
//문자열 타입으로 변환 
//1.String 생성자 함수를 new 연산자 없이 호출하는 방법
String(i);
String(NaN);
String(Infinity);
String(true);
String(false);

//2.Object.prototype.toString 메서드를 사용하는 방법 
(1).toString();
(NaN).toString();
(Infinity).toString();
(true).toString();
(false).toString();

//3. 문자열 연결 연산자를 이용하는 방법 
1 + '';
NaN + '';
Infinity + '';
true + '';
false + '';

//숫자 타입으로 변환/////////////////////////////////
//1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
Number('0');
Number('-1');
Number('10.53');
Number(true);
Number(false);

//2. parseInt, ParseFloat 함수를 사용하는 방법(문자열만 변환 가능 )
parseInt('0');
parseInt('-1');
parseFloat('10.53');

//3. +단항 산술 연산자를 이용하는 방법 
+'0'
+'-1'
+'10.53'
+true
+false

//4. *산술 연산자를 이용하는 방법 
'0' * 1;
'-1' * 1;
'10.53' * 1;
true * 1;
false * 1;

// 불리언 타입으로 변환 /////////////////////////////////
//1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법 
Boolean('x');
Boolean('');
Boolean('false');
Boolean(0);
Boolean(1);
Boolean(Infinity);
Boolean(null);
Boolean(undefined);
Boolean({});
Boolean([]);

//2. : 부정 논리 연산자를 두 번 사용하는 방법 
//문자열 방법 => 불리언 타입
!!'x';
!!'';
!!'false'
!!0;
!!1;
!!NaN;
!!Infinity;
!!null;
!!undefined;
!!{};
!![];

// 단축 평가 
//"논리합 또는 논리곱 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다. 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다."
//논리곱 연산자는 좌항에서 우항으로 평가가 진행된다. 
 
//단축 평가: 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다.
//단축 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다. 

//논리곱 연산자는 논리 연산의 결과를 결정하는 두번째 피연산자까지 살펴보고 값을 문자열을 반환한다. 
'Cat' && 'Dog' // 'Cat'은 Truthy 값이므로 true로 평가된다. 
false && 'DOg'
'Cat' && false

//논리합 연산자는 논리 연산의 결과를 결정한 첫 번째 피 연산자 문자열을 그대로 반환한다.
'Cat' || 'Dog'
false || 'Dog'
'Cat' || false

//어떤 조건이 Truthy 값 일 때 무언가를 해야 한다면 논리곱 연산자 표현식으로 if 문을 대체할 수 있다. 
var done = true;
var message = '';

//if (done) message = '완료';

message = done && '완료'
console.log(message);

//어떤 조건이 Falsy 값일 때 무언가를 해야 한다면 논리합 연산자 표현식으로 if 문을 대체할 수 있다.
var done = false;
var message = '';

//if (!done) message = '미완료';

message = done || '미완료';
console.log(message);

//삼항 조건 연산자는 if..else문으로 대체 가능하다. 
var done = true;
var message = '';

if (done) message = '완료';
else      message = '미완료';
console.log(message);

message = done ? '완료' : '미완료';
console.log(message);

var elem = null;
var value = elem.value;

var elem = null;
var value = elem && elem.value;

function getStringLength (str) {
    str = str || ''
    return str.getStringLength;
}

getStringLength();
getStringLength('hi');

function getStringLength (str) {
    return str.getStringLength;
}

getStringLength();
getStringLength('hi');

//옵셔널 체인징 연산자 
var elem = null;
var value = elem?.value;
console.log(value);

var elem = null;
var value = elem && elem.value;
console.log(value);

var str = '';
var length = str && str.length;
console.log(length);

var str ='';
var length = str?.length;
console.log(length);
  
var foo = null ?? 'default string'
console.log(foo);

var foo = '' || 'default string'
console.log(foo);

var foo = '' ?? 'default string'
console.log(foo); 


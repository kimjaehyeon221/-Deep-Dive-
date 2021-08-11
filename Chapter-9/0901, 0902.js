//0901: 자바 스크립트의 타입 변환

// 의도적으로 값의 타입을 변환하는 것으로 명시적 타입 변환과 타입 캐스팅이 있다. 
var x = 10;
var str = x.toString();
console.log(typeof str, str);
console.log(typeof x, s)

//자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것을 암묵적 타입 변환, 타입 강제 변환이라고 한다. 
var x = 10;
var str = x + '';
console.log(typeof str, str);
console.log(typeof x, x);

//명시적 타입 변환이나 암묵적 타입 변환이 기존 원시 값을 재활당하여 변경하는 것은 아니다. 
//원시값은 변경 불가능한 값이므로 변경할 수 없다. 
//타입 변환이란 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것이다. 

//0902: 암묵적 타입 변환

//문자열 타입으로 변환 

1 + '2'
//문자열 연결 연산자의 역할은 문자열 값을 만드는 것이다. 따라서 문자열 연결 연산자의 모든 피연산자는 코드의 문맥상 모두 문자열 타입이어야 한다. 

`1 + 1 = ${1 + 1}`
//연산자 표현식의 피연산자만이 암묵적 타입 타입 변환의 대상이 되는 것은 아니다. (자바스크립트 엔진은 표현식을 평가할 때 코드 문맥을 분석한다. )

//불리언 타입으로 변환 
//자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 갑(참으로 편가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다. 

//false -> Falsy값 : false undefines null 0, ~0, NaN, ''(빈 문자열)
function isFalsy(v) {
    return !v;
}
function isTruthy(v) {
    return !!v;
}
//모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy(''); 
isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);


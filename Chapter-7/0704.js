//조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 암묵적 타입 변환된다. 
//if ~ else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다. 
var x = 2;
var result = x % 2 ? '홀수 ' : '짝수';

//삼항 조건 연산자 표현식은 이런 점에서 값으로 평가할 수 있는 표현식인 문이다. 
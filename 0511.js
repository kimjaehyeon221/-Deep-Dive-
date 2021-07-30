//표현식은 문의 일부일 수도 있고 그 자체로 문이 될 수도 있다. 
//표현식인 문은 값으로 평가될 수 있는 문이며, 표현식이 아닌 문은 값으로 평가될 수 없는 문을 의미한다. 
//표현식인 문과 표현식이 아닌 문을 구별하는 가장 간단하고 명로한 방법은 변수에 할당해 보는 것이다. 

var x; 
// 변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다. 즉, 변수 선언문은 표현식이 아닌 문이다. 

x = 1 + 2;
// 1, 2, 1 + 2, x = 1 + 2는 모두 표현식이다.
// x = 1 + 2 할당문은 표현식이면서 완전한 문이기도 하다. 즉, 할당문은 표현식인 문이다. 

var foo = var x;
//표현식이 아닌 문은 값처럼 사용할 수 없다. 

var foo = x = 100;
//표현식은 값처럼 사용할 수 있다. 

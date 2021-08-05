// if ~ else if 문 
var num = 2;
var kind;

if (num > 0){
    kind = '양수'
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); 

//만약 코드 불록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다. 
var num = 2;
var kind;

if (num > 0)    kind = '양수'
else if (num < 0) kind = '음수'
else kind = '영'
console.log(kind); 

//삼항 조건 연산자로 바꿔 쓸 수 있다. 
var x = 2;
var result  = x % 2 ? '홀수' : '짝수';
console.log(result);

//좀 더 까다로운 삼항 조건 연산자
var kind  = num  ? (num > 0 ? '양수' : '음수') : '영';
console.log(result);

//switch 문 
//break 문을 사용하지 않으면 fall through가 실행된다. 
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year  % 4 === year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month')
}


//for 문의 변수 선언문의 변수 이름은 반복을 의미하는 iteration의 i를 사용하는 것이 일반적이다. 
//증감식 실행이 종료되면 다시 조건식이 실행된다. 변수 선언문이 실행되는 것이 아니라 조건식이 실행된다는 점에 주의하자.

//for문의 기본 형태 
for (;;) { }

for (var i = 0; i < 2; i ++){
    console.log(i);
}

for (var i = 1; i <= 2; i --){
    console.log(i);
}

//템플릿 리터럴 내에서는 표현식 삽입을 통해 간단히 문자열을 삽입할 수 있다. 
for(var i = 1; i <= 6; i++){
    for(var j = 1; i <= 6; j++){
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}

//while문 (for 문은 반복 횟수가 명확할 때 주로 사용하고 while 문은 반복 횟수가 불명확할 때 주로 사용한다.)
//while문의 기본 형태 
while (true) {}

var count = 0;
//while문의 무한 루트에서 벗어나는 방법은 if문을 활용하는 것이다. 
while (true) {
    console.log(count);
    count++;
    if(count === 3) break;
}

var count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

//무조건 한번 이상 코드를 실행하고자 할 때 
var count = 0;
do {
    console.log(count);
    count ++;
}while (count < 3);
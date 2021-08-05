//break 문은 레이블 문, 반복문 또는 switch 문의 코드 블록을 탈출한다. 
//레이블 문이란 식별자가 붙은 문을 의미한다. 
//이 외에 break문을 사용하면 문법에러가 발생한다. 

//예시
if (true){
    break;
}

// foo라는 레이블 식별자가 붙은 레이블 문 
foo: console.log('foo')

//foo라는 식별자가 붙은 레이블 블록문 
foo:  {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!'); 


//중첩된 for 문의 내부 for문에서 break 문을 실행하면 내부 for 문을 탈출하여 외부 for 문으로 진입한다. 
//이때 내부 for 문이 아닌 외부 for 문을 탈출하려면 레이블 문을 사용한다. 
//레이블 문은 중첩된 for 문 외부로 탈출할 때 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다. 
//레이블 문을 사용하면 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다. 

outer : for (var i = 0; i < 3; i ++){
    for (var j = 0; j < 3; j ++){
        if( i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!')

// break문이 반복문, switch 문에서 사용 된다면 break 문에 레이블 식별자를 지정하지 않는다. 

var string = 'Hello World'
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) {
    if (string[i] === search){
        index = i;
        break;
    }
}

console.log(index)
console.log(string.indexOf(search))

//continue
var string  = 'Hello World';
var search = 'l'
var count = 0;

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다. 
// if 문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하고 가독성도 좋다.
// if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue문을 사용하는 것이 가독성에 좋다. 
for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue;
    count ++;
}


// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다. 
for (var i = 0; i < string.length; i++) {
    if (string[i] === search) count ++;
}

console.log(count);

const regxp = new RegExp(search, 'g');
console.log(string.match(regexp).length);


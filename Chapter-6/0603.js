var template = `Template literal`
console.log(template);

var template = `<ul>
  <li><a href = "#">Home</a></li>
</ul>`;
console.log(template);

var first = 'Ung-mo'
var last = 'Lee'                                                                                     
console.log('My name is ' + first + '' + last + '.')

//위의 사례와는 다르게 표현식 삽입은 반드 시 템플릿 리터럴 내에서 사용해야 한다.
var first = 'Ung-mo'
var last = 'Lee'
console.log(`My name is ${first} ${last}`);

console.log(`1 + 2 = ${1 + 2}`); 
console.log('1 + 2 = ${1 + 2}');

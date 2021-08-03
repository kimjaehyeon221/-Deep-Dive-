 //ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다. 
 //객체의 유일한 프로퍼티 키를 만들기 위해 사용한다. 
 //symbol값은 외부에 노출되지 않으며, 다른 값과 절대 중복되지 않는 유일무이한 값이다. 
// 추후에 자세히 공부할 것  
 var key = Symbol('key')
 console.log(typeof key);

 var obj = {};

 obj[key] = 'value'
 console.log(obj[key]);
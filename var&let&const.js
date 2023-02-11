//var: 값 재선언 & 재할당 모두 가능
var name = 'Max'; //string
var age = 29; //int
var hobby = true; //boolean

//const: 값 재선언 & 재할당 모두 불가
//let: 값 재선언 불가능 & 재할당 가능
const name = 'Max'; 
let age = 29; //
const hobby = true;

age = 30;

//function
function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

//지역변수이기 때문에 외부에서 사용할 수 없음
//console.log(userName); 

console.log(summarizeUser(name, age, hasHobbies));
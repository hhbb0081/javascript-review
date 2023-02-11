//화살표 함수

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

//더 간단한 표현

//함수 내 코드가 짧다면 중괄호 & return 생략 가능
const add = (a, b) => a + b;
console.log(add(1, 2)); //3 출력

//인수가 하나라면 인수를 감싸는 소괄호도 생략 가능
const addOne = a => a + 1;
console.log(addOne(1)); //2 출력

//인수가 없다면 소괄호를 생략할 수 없음
const addRandom = () => 1 + 2;
console.log(addRandom()); //3 출력
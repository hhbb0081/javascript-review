//객체
const person = {
  name: 'Max',
  age: 29,

  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

//배열
const hobbies = ['Sports', 'Cooking'];

//slice 메서드는 배열을 복사

//인수가 없으면 배열 전체를 복사
const copiedArray = hobbies.slice();

//spread: 기존 자료구조의 모든 원소를 가져와 새로운 자료구조에 담는다.
const copiedArray2 = [...hobbies]; //배열
const copiedPerson = { ...person }; //객체

//Rest: 인수의 개수를 정하지 않고 유동적으로 사용자가 정할 수 있도록 함, 여러 인수를 하나의 배열로 묶는데 사용
const toArray = (...args) => {
  return args;
}

console.log(toArray(1, 2, 3, 4));
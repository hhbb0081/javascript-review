//객체
const person = {
  name: 'Max',
  age: 29,

  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

//객체 구조 분해
const { name, age } = person;

//배열 구조 분해: 객체 구조 분해와 다르게 구조 분해 시 이름 재설정 가능
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
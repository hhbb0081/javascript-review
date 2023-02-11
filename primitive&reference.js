//원시 타입 & 참조 타입

//객체와 배열은 모두 참조 타입:
//참조 타입은 해당 자료구조가 저장된 메모리 위치를 가리키는 주소를 저장

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

//배열에 요소 추가 : 배열이 수정되는 것이 아니라 새로운 배열이 생성되며 그 주소를 가리킴
hobbies.push('Programming');
console.log(hobbies);
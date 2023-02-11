const person = {
  name: 'Max',
  age: 29,

  //this는 화살표 함수 내에서 사용하면 전역 스코프
  greet: () => {
    console.log('Hi, I am ' + this.name); //Hi, I am undefined
  },

  greet() {
    console.log('Hi, I am ' + this.name); //Hi, I am Max
  }
};

console.log(person.greet());
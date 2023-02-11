const hobbies = ['Sports', 'Cooking'];

//for ... of: 배열 요소 하나씩 접근
for (let hobby of hobbies) {
  console.log(hobby);
}

//map 메서드: 새로운 배열 생성
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

//map 메서드로 배열을 수정한다고 해서 기존 배열이 수정되는 것은 아님
console.log(hobbies);
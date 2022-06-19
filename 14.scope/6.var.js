// var의 특징
// -> 일반 코딩 방식과 어긋나서 개발할 때 혼동
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언과 재할당의 구분이 어려움
something = "hello";
console.log(something);

// 2. 중복 선언이 가능함
var num = 1;
var num = 2;
console.log(num);

// 3. 블록 레벨 스코프 안 됨❌
var apple = "사과";
{
  var apple = "🍎";
}
console.log(apple); // 🍎

// 4. 함수 레벨 스코프만 지원됨
function print() {
  var dog = "dog";
}
console.log(dog); // Error

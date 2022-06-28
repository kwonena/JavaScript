// Prototype (원형)
// 첫번째, 오리지널 버전
// 그룹의 공통된 특징, 대략적으로 나타낸 것
// JavaScript는 Prototype을 베이스로 한 객체지향 프로그래밍
// 객체지향 프로그래밍을 만들 때, class 이전에 사용한 것

// JS의 모든 객체는 Object라는 Prototype을 가지고 있음
// 배열은 정의된 값이 없어도 기본 Prototype이 Array이기 때문에 배열 함수를 사용할 수 있음
// Array도 객체이기 때문에 Object를 상속함
// 객체간 상속의 연결 고리는 프로토타입 체인으로 연결 되어 있음

const dog = { name: "dog", emoji: "🐶" };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log("name" in dog);
console.log(dog.hasOwnProperty("name")); // 특정 키 포함 여부 나타냄

// Object 각각의 property는 property Descriptor라는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors); // { name: { value: 'dog', writable: true, enumerable: true, configurable: true }, emoji: { value: '🐶', writable: true, enumerable: true, configurable: true } }

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc); // { value: 'dog', writable: true, enumerable: true, configurable: true }

// property 수정 가능
Object.defineProperty(dog, "name", {
  value: "cat",
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log(dog.name); // cat

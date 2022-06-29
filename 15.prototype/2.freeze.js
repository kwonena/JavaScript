// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// 단, 얕은 꽁꽁 얼림! -> 객체가 참조하는 다른 객체는 수정 가능
const ena = { name: "ena" };
const dog = { name: "와우", emoji: "🐶", owner: ena };
Object.freeze(dog);

// 객체 변경 불가
dog.name = "멍멍";
dog.age = 4;
delete dog.name;
console.log(dog); // 기존 값만 출력됨

// 객체가 참조한 값은 변경 가능
ena.name = "nana";
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: 'nana' } }

// 밀봉! Object.seal 수정 ⭕, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog); -> dog의 property 복사로 스프레드 연산과 같은 역할

Object.seal(cat);

cat.name = "냐옹";
delete cat.emoji;
console.log(cat); // { name: '냐옹', emoji: '🐶', owner: { name: 'nana' } }

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
tiger.name = "어흐응"; // { name: "어흥" }
delete tiger.name; // {}

tiger.age = 1; // 추가 불가능

// 동결 여부 확인 함수
console.log(Object.isFrozen(dog)); // true

// 밀봉 여부 확인 함수
console.log(Object.isSealed(cat)); // true

// 확장금지 확인 함수
console.log(Object.isExtensible(tiger)); // false

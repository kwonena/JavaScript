// 객체가 가질 수 있는 함수 레벨 3가지
// 1. 인스턴스 레벨
// 2. 프로토타입 레벨
// 3. 정적 레벨

// const dog1 = { name: "뭉치", emoji: "🐕" };
// const dog2 = { name: "코코", emoji: "🐩" };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  // 1. 인스턴스 레벨의 함수
  // 생성된 인스턴스마다 함수를 보유하게 됨 -> 메모리 낭비
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

// 2. 프로토타입 레벨의 함수
// 인스턴스 레벨의 함수에 있던 단점을 보완 (메모리 절약)
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog("뭉치", "🐕");
const dog2 = new Dog("코코", "🐩");
console.log(dog1, dog2);

// 각각의 인스턴스에 포함되진 않지만 사용 가능
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면  (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log("안녕!!");
};

dog1.printName(); // 안녕!!

// 3. 정적 레벨의 함수
// 생성자 함수 또는 클래스 이름으로만 접근 가능
Dog.hello = () => {
  console.log("Hello!");
};
// dog1.hello(); -> 접근 불가능
Dog.hello(); // Hello!

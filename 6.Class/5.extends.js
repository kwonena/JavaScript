class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자");
  }

  sleep() {
    console.log("잔다!");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger); // Tiger { color: '노랑이' }
tiger.sleep(); // 잔다!
tiger.eat(); // 먹자

class Dog extends Animal {
  constructor(color, ownerName) {
    // super : 상속하고 있는 부모를 뜻함
    super(color);
    this.ownerName = ownerName;
  }

  play() {
    console.log("놀자아~!");
  }

  // 오버라이딩 overriding
  // 자식 클래스에서 부모 클래스의 함수를 덮어씌움
  eat() {
    // 부모 클래스의 기능을 유지하고 싶다면
    super.eat();
    console.log("먹자");
  }
}

const dog = new Dog("빨강이", "이나");

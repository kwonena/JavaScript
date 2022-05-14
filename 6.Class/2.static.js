// static 정적 프로퍼티, 메서드

class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 인스턴스 레벨에 있는 프로퍼티와 메서드는
// 생성된 인스턴스를 통해서만 접근 및 호출 가능
console.log(Fruit.name);
Fruit.display();

// 클래스 레벨에 있는 프로퍼티와 메서드는
// 클래스 이름을 통해서만 접근 및 호출 가능
const banana = Fruit.makeRandomFruit();
console.log(banana); // Fruit { display: [Function: display], name: 'banana', emoji: '🍌' }

console.log(Fruit.MAX_FRUITS); // 4

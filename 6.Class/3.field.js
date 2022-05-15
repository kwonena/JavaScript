// 접근제어자 - 캡슐화
// 내부상 필요한 데이터를 외부에서 접근할 수 없게 함
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  // 함수도 #을 붙이면 클래스 내부에서만 사용 가능
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
apple.#name = "오렌지"; // #field는 외부에서 접근이 불가능함
console.log(apple);

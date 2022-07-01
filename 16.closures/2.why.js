// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
// (과거 JavaScript에서 클래스와 private 필드가 없었기 때문에
// 클로져의 성격을 활용해 정보를 은닉)

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();
// 함수로 원하는 데이터(count)를 숨기고,
// public함수(increase)로 내부 데이터를 조작하게 만들어줌

// 지금은 클래스를 사용하면 됨
class Counter {
  #count = 0; // private 변수
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();

function loop() {
  const array = [];
  // var과 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

// array는 i를 출력하는 함수들이 들어있는 배열
// 출력하면 외부 블럭 스코프의 i 정보를 가지고 있음

// let의 경우
// 출력 결과 : 0 1 2 3 4
// why? i의 값별로 array에 추가됨

// var의 경우 -> 블럭 스코프 ❌, 함수 스코프만 존재
// 출력 결과 : 5 5 5 5 5
// why? 함수 스코프만 있기 때문에 공통된 i 변수의 최종 증가값만을 저장

// Closures (폐쇄, 닫히는 느낌)
// 함수와 렉시컬 환경의 조합
// 내부 함수에서 외부 함수로의 접근 권한
// 함수가 중첩되어 있을 때, 내부 함수가 외부 함수의 데이터에 접근할 수 있는 것

const text = "hello";
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  inner();
}
outer(); // inside inner: 0

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1(); // inside inner: 0
// 클로져에 의해 inner가 return될 때 outer의 렉시컬 환경도 함께 반환된 것

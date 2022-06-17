{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  console.log(y); // Error
}

// 블럭 외부 변수
// => 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
const text = "global";
{
  // 블럭 내부 변수
  // => 지역 변수, 지역 스코프 (로컬 변수, 로컬 스코프)
  const text = "inside block1";
  {
    console.log(text); // inside block1
  }
}

// strict mode (엄격 모드)
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
"use strict";

// 엄격 모드를 사용하면 delete로 변수 삭제 ❌
var x = 1;
// delete x;

// 선언하지 않은 변수 사용 ❌
function add(x) {
  var a = 2;
  b = a + x;
}
add(1);

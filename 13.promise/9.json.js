// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(): object -> JSON
// parse(): JSON -> object

const ena = {
  name: "ena",
  age: 25,
  eat: () => {
    console.log("eat");
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
// object의 data는 모두 변환이 가능하지만 함수는 data가 아니기 때문에 포함❌
const json = JSON.stringify(ena);
console.log(ena); // { name: 'ena', age: 25, eat: [Function: eat] }
console.log(json); // {"name":"ena","age":25}

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // { name: 'ena', age: 25 }

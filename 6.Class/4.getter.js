// 접근자 프로퍼티 (Accessor Property)
// 변수로 보이지만 실제로 함수
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // 생성자는 한 번 만들어진 값을 유지하기 때문에 업데이트가 불가능
    // 일반적인 프로퍼티로 사용하면 firstName만 변경하고 싶어도 할 수 없는 문제점 발생
    // this.fullName = `${this.lastName} ${this.firstName}`;
  }

  // 함수지만 고정된 값이 아닌 호출된 시점에 값을 생성함
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // set은 할당할 때 호출됨
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("이나", "권");
student.firstName = "나나";
console.log(student.firstName); // 나나
console.log(student.fullName); // 권 나나
student.fullName = "김철수"; // 값이 할당 되었으므로 set 호출

// fullName을 student.fullName() 이런 방법이 아닌
// 일반 속성처럼 student.fullName 이렇게 접근하고 싶을 때 접근자 프로퍼티 사용

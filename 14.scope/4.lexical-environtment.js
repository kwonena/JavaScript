// Lexical Environtment (렉시컬 환경)
// 각각의 블록은 렉시컬 환경이라는 내부 오브젝트를 가지고 있음
// 실행 순서와 블럭의 정보를 오브젝트에 데이터로 저장
// 내부 스코프에서 외부 스코프에 접근할 수 있는 이유

// 환경 레코드와 외부 환경 참조 두 가지 종류로 구성
// 환경 레코드 : 현재 블럭에 대한 정보를 담고 있음
// 외부 환경 참조 : 부모 요소를 찾기 위한 부모를 참조하고 있음

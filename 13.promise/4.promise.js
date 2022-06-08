function runInDelay(seconds) {
  // Promise는 resolve, reject 인자 값을 전달 받아야 함
  // 성공적으로 then을 호출 했을 때 -> resolve
  // 실패해서 catch를 호출 했을 때 -> reject
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      // reject는 Error Object가 필요함
      reject(new Error("seconds가 0보다 작음"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log("타이머 완료!"))
  .catch(console.error)
  .finally(() => console.log("끝났다!"));

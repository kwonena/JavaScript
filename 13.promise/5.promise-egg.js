function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음"));
  // return Promise.resolve("🪴 => 🐔");
}

// 전달 인자와 출력 인자가 같으면 생략 가능
getChicken()
  .catch(() => "🐔")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

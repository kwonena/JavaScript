function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error("μΉν¨μ κ°μ§κ³  μ¬ μ μμ"));
  // return Promise.resolve("πͺ΄ => π");
}

// μ λ¬ μΈμμ μΆλ ₯ μΈμκ° κ°μΌλ©΄ μλ΅ κ°λ₯
getChicken()
  .catch(() => "π")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

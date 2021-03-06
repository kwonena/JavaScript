function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no Orange"));
}

// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

// Promise.race ์ฃผ์ด์ง Promise ์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋ ๊ฒ์ด ์ด๊น!
Promise.race([getBanana(), getApple()]) //
  .then((fruits) => console.log("race", fruits));

// ์ฑ๊ณตํ ๊ฒฝ์ฐ์๋ง ์ ๋ณด๋ฅผ ๋ฐ์์ฌ ์ ์์
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

// ์ฑ๊ณต ์ฌ๋ถ์ ์๊ด์์ด ๋ชจ๋  ์ ๋ณด๋ฅผ ๋ค ๋ฐ์์ฌ ์ ์์
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);

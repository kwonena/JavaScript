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
// promise ํจ์ getBanana๊ฐ ์๋ฃ๋๋ฉด ๊ธฐ๋ค๋ ธ๋ค๊ฐ(await) banana ๋ณ์์ ์ ์ฅ
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));

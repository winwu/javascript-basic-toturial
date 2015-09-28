function sayHello(firstName, lastName) {
  console.log(firstName + lastName + '你好!');
}

// 本來應該要傳入 lastName 而沒有傳入 lastName
// 你會得到 undefined
sayHello('wu');
// wuundefined你好!



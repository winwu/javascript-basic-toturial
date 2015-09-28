function sayHello(firstName, lastName) {
  if (typeof(lastName) == 'undefined')
  {
    // 如果沒有定義 lastName 的值
    // 那我們就給他空值來當作預設值
    lastName = '';
  }
  console.log(firstName + lastName + '你好!');
}

// 本來應該要傳入 lastName 而沒有傳入 lastName
// 你會得到 undefined，但是因為我們有判斷 lastName 是不是 undefined
// 所以會得到正常的結果
sayHello('wu');

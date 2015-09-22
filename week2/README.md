## Alert

```js
window.alert('alert message');
```

* 彈出警示 Dialog Boxes 給使用者，並通知訊息。
* 使用者只能夠透過按下 OK 或是確定，關閉 Box 之後，才能繼續使用網頁。
* 呼叫 alert 時可以忽略 window。
* 複習上週的課程，因為 JavaScript 是大小有別的，因此 `alert` 如果用大寫 `ALERT` 是不行的，指的是不一樣的東西。
* alert 原生的樣式是不能修改的，只能以瀏覽器產出的結果為主。
* [alert 跟 window.alert 有什麼不一樣](http://stackoverflow.com/questions/13459907/what-is-the-difference-between-alert-and-window-alert)
* alert 若要多行顯示，分行或加入跳格位，可使用以下三個控制碼:
	* `n` 代表 new line。
	* `r` 代表 return。
	* `t` 代表 tab。

## Confirm

```js
confirm('confirm question?');
```

* 跟 alert 一樣，因為都是 `window` 物件底下的函式，因為 `window` 可以省略不寫，若要寫則是 `window.confirm('confirm message');`。
* 彈出一個詢問框的 Dialog Boxes 給使用者，使用者必須二選一之後才能繼續使用網頁。
* 有回傳值 `True` 或是 `False`，通常我們會拿這個回傳值的結果，做一些後續的功能判斷等等。


## Prompt

```js
prompt('ask something and we expect user give us answer');
```

* prompt 用來詢問使用者的意見，跟 confirm 很像，只是回傳值結果不是 True 或是 False，而是接收到使用者回答的資訊。


## 條件語句及流程控制

* if: 當一條件成立時，就執行代碼。
* if...else: 當一條件成立時，就執行代碼，否則則執行另外一段程式碼。
* if...else if....else: 不斷的判斷是否符合條件，若符合就執行該段程式碼，否則則會執行最後的 else 區段。
* switch: 跟前者很像，很多情況來判斷，但只會選擇一種，

### 示範

* if 

```js

// isEatLunch 儲存是否吃過中餐
var isEatLunch = true;

if (isEatLunch) {
  console.log('已吃過');	
}

```

* if...else 

```js

// isEatLunch 儲存是否吃過中餐
var isEatLunch = true;

if (isEatLunch) {
 	console.log('已吃過');	
} else {
	console.log('未吃過');	
}

```

* if... else if ... else

```js

var today = 'Monday';

if (today == 'Sunday')
{
	console.log('今天買千折百');
} else if (today == 'Friday')
{
    console.log('今天優惠是買五送ㄧ');
} else {
	console.log('今天沒有優惠');
}

```

* switch
switch  在撰寫時，要小心 break 一定要記得加，否則程式就不會停止在該區段，而會一直往下走。

```js
switch(n)
{
  case 1:
     執行代碼 A
     break;
  case 2:
     執行代碼 B
     break;
  default:
     case1 跟 case2 都不符合的時候，就執行這裡
}
```

---

## JavaScript 的日期 Date

如何使用 Date 物件? 你必須要 new  一個 JavaScript 內建的 Date 物件，然後把這個 new 起來的日期存在一個變數裡。

```js
var myDate = new Date();
```

當你把日期存到一個變數後，便可以利用這個儲存起來的變數，操作日期的一些函式，Example:

```js
// new 一個 Date 物件
var myDate = new Date();

// 取得年份
myDate.getFullYear();

// 將日期轉換為 UTC 字串
myDate.toUTCString();

// 今天幾號
myDate.getDate();

// 取得分鐘
myDate.getMinutes()

// 取得小時
myDate.getHours()

// 取得星期
myDate.getDay();

```


### window 瀏覽器對象(Object)
瀏覽器對象模型 Browser Object Model。
所有瀏覽器都有這個 window object，他是內建的。
window 有很多屬性跟 function 可以使用，都跟瀏覽器有關。

你也可以試試看這些 window 的 function 或是 method，看看會發生什麼是:

```
window.open();
```

```
window.close();
```

```
window.innerHeight
```

```
window.innerWidth
```

```
window.location
//  window.location.hostname
//  window.location.pathname
//  window.location.port
//  window.location.protocol
```

```
window.history.back()
window.history.forward()
```

```
window.navigator.language;
window.navigator.languages;
```

## Optional Homework:
* [javascrip 時間顯示器](http://www.w3school.com.cn/tiy/t.asp?f=jsrf_date_timing_clock)
回家有空的時候看看這段程式碼，試著去理解它。
* [coursera](https://www.coursera.org/learn/html-css-javascript)
* [coursera](https://www.coursera.org/learn/website-coding)
* https://www.codecademy.com/courses/javascript-beginner-en-qDwp0/0/1?curriculum_id=506324b3a7dffd00020bf661





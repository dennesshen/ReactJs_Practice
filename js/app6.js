// 展開運算符（Spread/Rest Operator）：用於在函數調用/陣列構造時展開陣列或對象。
//ES5
function fooES5(x, y, z) {
    console.log(x, y, z);
}
fooES5(1, 2, 3);
fooES5(1, 2, 3, 4);

//ES6
function foo(...args) {
  console.log(args);
}

foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//陣列展開運算符
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr1, ...arr2];
console.log(arr3);



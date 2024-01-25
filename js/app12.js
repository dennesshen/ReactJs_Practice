let a1 = 0;
let a2 = 1;
let a3 = 3;

// js當中真值定義： 非0, 非空字符串, 非空對象, 非null, 非undefined, 非NaN
// &&= 与运算赋值，如果左邊是真值，則返回右邊的值，否則返回左邊的值
a1 &&= a3;
console.log(a1); // 0

a2 &&= a3;
console.log(a2); // 3

let c = null;
let d = 12;
let e = 13;

// ||= 或运算赋值，如果左边是非真值，则返回左边的值，否则返回右边的值
c ||= e;
console.log(c); // 13

d ||= e;
console.log(d); // 12

let f = undefined;
let g = 0;
let h = 14;

// ??= 空值合并运算赋值，如果左边是null或undefined，则返回右边的值，否则返回左边的值
f ??= h;
console.log(f); // 14

g ??= h;
console.log(g); // 0
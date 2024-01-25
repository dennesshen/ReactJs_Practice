//參數默認值
//ES5
function foo(x, y) {
    if (x == undefined)
        x = 0;
    if (y == undefined)
        y = 0;
    console.log(x + y);
}

foo(1, 2);
foo();
foo(1);
foo(1, 2, 3);
foo(undefined, 2);
foo(null, 2);

//ES6
function bar(x = 0, y = 0) {
    console.log(x + y);
}

bar(1, 2);
bar();
bar(1);
bar(1, 2, 3);
bar(undefined, 2);
bar(null, 2);

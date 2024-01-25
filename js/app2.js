//Arrow function
//ES5
var add1 = function(a,b){
    return a+b;
}

console.log(add1(10,20));

var add2 = (a,b) => {
    return a+b;
}
console.log(add2(10,20));

var add3 = (a,b) => a+b;
console.log(add3(10,20));

var square = x => x*x;
console.log(square(10));

var sayHello = () => console.log("Hello");
console.log(sayHello());

//ES5 function當中的this
var objES5 = {
    id: 9,
    counter: function(){
        setTimeout(function(){
            console.log(this.id);
        }.bind(this), 1000);
    }
}
objES5.counter();

//ES6箭頭函數的this
var objES6 = {
    id: 10,
    counter: function(){
        setTimeout(() => console.log(this.id), 1000);
    }
}
objES6.counter();
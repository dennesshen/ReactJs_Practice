function add(x, y) {
  return x + y;
}

function subtract(x, y) {
    return x - y;
}

// 導出函數 (ES6 模組語法)
//export {add, substract};
// export {add, subtract}

// 因為 Run Code 不支援 ES6 模組語法
// 改用 CommonJS (Node.js 的模組系統)
module.exports = {add, subtract};
//export {add, subtract} from './math';
// 模組導入導出（Modules Import/Export）：用於組織和重用代碼。
// 導入特定函數 (ES6 模組語法)
// import {add, substract} from './math'
// 因為 Run Code 不支援 ES6 模組語法

// 改用 CommonJS (Node.js 的模組系統)
const {add, subtract} = require('./math');

console.log(add(1, 2));
console.log(subtract(1, 2));
/*
  將 app1.js ~ app12.js 所學習到的技術做一個 Lab
  用於計算購物清單總金額並列印出來的範例腳本。
  假設你是一位顧客，正在使用一個網上商店的購物車系統。
  當你選擇商品並將它們加入購物清單時，系統會根據商品的價格來計算總金額。
  然後，這個腳本會模擬從伺服器獲取最新的價格資訊，並重新計算清單中所有商品的總金額。
  最後，系統會顯示一張包含最終總金額的收據。
  這個練習讓同學們了解如何在JavaScript中實現基本的購物車功能，並熟悉非同步編程和其他現代JavaScript特性。
*/

const items = ["bread", "milk", "butter"];
const prices = {bread: 3, milk: 5, butter: 10};

const calculateTotal = (prices, ...items) => {
    return items.reduce((total, {item, quantity}) => total + (prices[item] || 0) * quantity, 0);
}

const printRecipt = total => console.log(`Your total is ${total}`);

const addToCart = (list, item="eggs", quantity=1) => list.push({item, quantity});

const fetchPrices = async () => {
    const resp= await Promise.resolve(prices);
    return resp;
}

const getItemPrice = (prices, item) => prices?.[item] ?? "no price";

(async () => {
    const prices = await fetchPrices();

    let shoppingList = [];
    addToCart(shoppingList, "bread", 12);
    addToCart(shoppingList, "milk", 5);
    console.log(shoppingList);
    const total = calculateTotal(prices, ...shoppingList);
    console.log(total);
    printRecipt(total);

})()
// Promise 和 Async/Await：用於處理非同步操作。
// Promise 是一個表示非同步運算的「最終」完成或失敗的物件。
// 程式碼閱讀上更接近於同步的寫法，但實際上是非同步的。

// 遠端抓取網頁資料
async function getData(url) {
    try {
        const response = await fetch(url); // 這是第一次的 await
        if(response.ok) {
            const data = await response.json();  // 這是第二次的 await
            console.log(data);
        } else {
            throw new Error('回應失敗');
        }
    } catch (error) {
        console.error(error);
    }
}

// 食用米抽檢不合個產品 url

const url = 'https://data.moa.gov.tw/Service/OpenData/FromM/AgricultureiRiceFailure.aspx';
getData(url);
console.log('finish');
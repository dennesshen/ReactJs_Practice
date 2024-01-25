// FormUI
// 商品代號、商品數量、商品代號變更事件、數量變更事件、資料傳送事件
function FormUI({symbol, amount, onSymbolChange, onAmountChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <h2>添加金融投資商品</h2>
            <div>
                <label>
                    商品代號:
                    <input type="text" value="symbol" value={symbol} onChange={onSymbolChange} />
                </label>
            </div>
            <div>
                <label>
                    商品數量:
                    <input type="number" value="amount" value={amount} onChange={onAmountChange} />
                </label>
            </div>
            <button type="submit">提交</button>
            <p>輸入的資料: symbol:{symbol} amount:{amount}</p>
        </form>
    )
}

export default FormUI;
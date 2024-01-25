import {Component} from "react";
import FormUI from "./FormUI";

class Form1 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            symbol: '',
            amount: '',
        }
    }

    // 處理onSymbolChange事件, 處理商品代號變化
    // event.target -> <input> 物件
    handleSymbolChange = (event) => {
        this.setState({
            symbol: event.target.value,
        });
    }

    // 處理onAmountChange事件, 處理商品數量變化
    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value,
        });
    }

    // 處理onSubmit事件, 處理表單提交
    handleSubmit = (event) => {
        event.preventDefault(); // 阻止表單提交
        const product = {amount: this.state.amount}
        // 可以將product送到遠端
        console.log(product);
    }

    render() {
        return (
            <FormUI
                symbol={this.state.symbol}
                amount={this.state.amount}
                onSymbolChange={this.handleSymbolChange}
                onAmountChange={this.handleAmountChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default Form1;
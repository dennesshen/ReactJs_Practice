// 類別元件（Class Components）：這是使用 ES6 的 class 來創建的元件，它們擴展了 React.Component
// 並提供了更多功能，例如生命周期方法和內部狀態。
// 與方法元件（Functional Components）不同的是, 類別元件可以使用 state 來管理元件的狀態

import {Component} from "react";

class UserGreeting extends Component{
    constructor(props) {
        super(props);
        // state的結構可以進行自訂
        // 將{isLoggedIn: props.isLoggedIn} 這個鍵值對放入state中
        this.state = {isLoggedIn: props.isLoggedIn};
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn){
            return <h1>Welcome back!</h1>;
        }else {
            return <h1>Please sign up.</h1>;
        }
    }
}


function ClassApp(){
    return(
        <>
            <UserGreeting isLoggedIn={true}/>
            <hr/>
            <UserGreeting isLoggedIn={false}/>
        </>
    )
}

export default ClassApp;
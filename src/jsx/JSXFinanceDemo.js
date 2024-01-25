import React from "react";



function JSXFinanceDemo(){

    const username = "Alex";

    const accountBalance = 9500;

    const transactions = [
        {id: 1, type: "deposit", amount: 1000, isCompleted: true},
        {id: 2, type: "withdraw", amount: 500, isCompleted: true},
        {id: 3, type: "deposit", amount: 2000, isCompleted: false},
        {id: 4, type: "withdraw", amount: 1000, isCompleted: true},
        {id: 5, type: "deposit", amount: 500, isCompleted: false},
    ]

    const allTransactionsCompleted = transactions.every((transaction) => transaction.isCompleted);

    const tranctionRows = transactions.map((transaction) => (
        <tr key={transaction.id} >
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.isCompleted ? "Yes" : "No"}</td>
        </tr>
    ));
    return(
        <div>
            <h2>Account Summary for {username}</h2>
            <h3>Account Balance: ${accountBalance}</h3>
            <h3>All Transactions Completed: {allTransactionsCompleted ? "Yes" : "No"}</h3>
            <table>
                <thead>
                    <tr><th>Id</th><th>Type</th><th>Amount</th><th>Completed</th></tr>
                </thead>
                <tbody>
                    {tranctionRows}
                </tbody>
            </table>
        </div>
    )

}

export default JSXFinanceDemo;
import React from "react";



function PersonalExpenseTracker(){

    const username = "Alex";

    const accountBalance = 9500;

    const transactions = [
        {id: 1, type: "food", amount: 1000, isCompleted: true},
        {id: 2, type: "entertainment", amount: 500, isCompleted: true},
        {id: 3, type: "transportation", amount: 2000, isCompleted: false},
        {id: 4, type: "transportation", amount: 1000, isCompleted: true},
        {id: 5, type: "food", amount: 500, isCompleted: false},
    ]

    const allTransactionsCompleted = transactions.every((transaction) => transaction.isCompleted);

    const totalAmount =
    transactions.reduce((total, transaction) => total + transaction.amount, 0);

    const tranctionRows = transactions.map((transaction) => (
        <tr key={transaction.id} style={{color: transaction.isCompleted || "red"}}>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
            <td>${transaction.amount}</td>
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
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {tranctionRows}
                </tbody>
                <tr>
                    <td colSpan="4"><hr/></td>
                </tr>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total Amount</td>
                        <td>${totalAmount}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )

}

export default PersonalExpenseTracker;
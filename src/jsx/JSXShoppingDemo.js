function JSXShoppingDemo(){

    //
    const title = "Shopping List";
    const budget = 1000;
    const items = [
        {id: 1, name: "Milk", price: 100},
        {id: 2, name: "bread", price: 80},
        {id: 3, name: "apple", price: 120},
    ];


    const totalCost = items.reduce((total, item) => total + item.price, 0);

    const tableRows = items.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>
    ))

    return(
        <div>
            <h2>{title}</h2>
            <h3>Budget: {budget}</h3>
            <h3>Total Cost: {totalCost}</h3>
            <table>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )

}

export default JSXShoppingDemo;
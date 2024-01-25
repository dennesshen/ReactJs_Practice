import React from 'react';

function Product({title, price,...props}) {
    return (
        <>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <hr />
            <div>
                {
                    Object.keys(props).map(key =>
                        <p key={key}>{key}:{props[key]}</p>)
                }
            </div>
        </>
    );
}

function JsxShoppingCartPropsDemo(props) {
    const products = [
        {id: '001', className: 'product1', flag: true, title:"手工香皂", price: 100},
        {id: '002', className: 'product2', flag: true, title:"洗面乳", price: 150},
        {id: '003', className: 'product3', flag: false, title:"沐浴乳", price: 130},
    ]

    return (
        <div>
            {
                products.map(product => (
                    <Product key={product.id}{...product}></Product>
                ))
            }
        </div>
    );
}

export default JsxShoppingCartPropsDemo;
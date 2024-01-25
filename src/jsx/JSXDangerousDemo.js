import React from 'react';

const productDescription = `
  <div class="product-description">
    <h2>產品特點</h2>
    <ul>
      <li>由自然材料製成，安全無害</li>
      <li>手工製作，每一件都獨一無二</li>
      <li>含有維他命E，長期使用可改善皮膚狀況</li>
    </ul>
    <p>這款手工皂選用最純淨的橄欖油，給您最溫和的洗感。</p>
  </div>
`;

const productInfo = {
    title: '橄欖皂',
    price: 39.99
};

//客製化組件
function Product({description, info}) {
    const createHtml = (despHtml) => {
        return {__html: despHtml};
    }

    return(
        <div>
            <h1>{info.title}</h1>
            <div dangerouslySetInnerHTML={createHtml(description)}/>
            <p>價格: {info.price}</p>
        </div>
    )
}

function JsxDangerousDemo(props) {
    return (
        <div>
            <Product description={productDescription} info={productInfo}/>
        </div>
    );
}

export default JsxDangerousDemo;
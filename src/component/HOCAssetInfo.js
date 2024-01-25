import React from 'react';


//資產組件 -> 基本組件
function AssetComponent({asset}) {
    return (
        <div>
            <h2>用戶資產</h2>
            {
                asset.map(asset => (
                    <p key={asset.id}>{asset.name}: {asset.amount * asset.price}</p>
                ))
            }
        </div>
    );
}

//用戶資訊組件 -> 基本組件
function UserInfoComponent({userInfo}) {
    return (
        <div>
            <h2>用戶資訊</h2>
            {
                userInfo.map(userInfo => (
                    <p key={userInfo.id}>{userInfo.type}: {userInfo.value}</p>
                ))
            }
        </div>
    );
}


function withCreditScore(Component) {
    //返回新組建
    return function EnhanceComponent(props) {
        const creditScore = 750;
        return (
            <div>
                <Component {...props} />
                <div style={{color: 'red'}}>信用分數:{creditScore}</div>
            </div>
        )

    };
}


const EnhanceAssetComponent = withCreditScore(AssetComponent);
const EnhanceUserInfoComponent = withCreditScore(UserInfoComponent);

function HocAssetInfo() {
    const userAssets = [
        {id: 1, name: 'BTC', amount: 0.1, price: 10000},
        {id: 2, name: 'ETH', amount: 1, price: 300},
        {id: 3, name: 'EOS', amount: 10, price: 5},
    ];

    const userInfos = [
        {id: 1, type: '名字', value: '张三'},
        {id: 2, type: '年龄', value: '18'},
        {id: 3, type: '性别', value: '男'},
    ]

    return (
        <div>
            <EnhanceAssetComponent asset={userAssets} />
            <hr />
            <EnhanceUserInfoComponent userInfo={userInfos} />
        </div>
    );
}

export default HocAssetInfo;
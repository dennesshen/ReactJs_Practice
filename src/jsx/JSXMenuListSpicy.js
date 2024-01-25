import React from 'react';

function CustomComponent({render}) {
    return render();
}

function SpicyIcon({spicy}) {
    //根據辣度生成辣椒圖標的數量
    return <>{'🌶️'.repeat(spicy)}</>
}

function MenuItem({item}) { //客製化元件
    return (
        <div key={item.id}>
            {item.name} {item.spicy > 0 && <SpicyIcon spicy={item.spicy}/> }
        </div>
    )
}

function JsxMenuListDemo(props) {
    const menuList = [
        {id: 1, name: '紅燒牛肉麵', spicy: 1},
        {id: 2, name: '宮保雞丁', spicy: 2},
        {id: 3, name: '麻婆豆腐', spicy: 3},
        {id: 4, name: '蔥油餅', spicy: 0},
        {id: 5, name: '炒麵', spicy: 0},
        {id: 6, name: '炒飯', spicy: 0},
        {id: 7, name: '炒青菜', spicy: 0},
        {id: 8, name: '炒時蔬', spicy: 0},
        {id: 9, name: '炒花枝', spicy: 1},
        {id: 10, name: '炒蛤蜊', spicy: 1},
        {id: 11, name: '炒蝦仁', spicy: 2},
        {id: 12, name: '炒蛋', spicy: 0}
    ];

    return (
        <>
            <h2>Menu List</h2>
            {
                menuList.map(item => (
                    <MenuItem key={item.id} item={item}/>
                ))
            }
        </>
    )
}

export default JsxMenuListDemo;
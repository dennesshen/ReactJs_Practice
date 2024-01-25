import React from 'react';

function CustomComponent({render}) {
    return render();
}

function JsxMenuListDemo(props) {
    const menuList = [
        {id: 1, name: '紅燒牛肉麵'},
        {id: 2, name: '宮保雞丁'},
        {id: 3, name: '麻婆豆腐'},
        {id: 4, name: '蔥油餅'},
        {id: 5, name: '炒麵'},
        {id: 6, name: '炒飯'},
        {id: 7, name: '炒青菜'},
        {id: 8, name: '炒時蔬'},
        {id: 9, name: '炒花枝'},
        {id: 10, name: '炒蛤蜊'},
        {id: 11, name: '炒蝦仁'},
        {id: 12, name: '炒蛋'}
    ]
    const userList = [
        {id: 1, name: 'Alex', age: 18},
        {id: 2, name: 'Bobs', age: 20},
        {id: 3, name: 'Ella', age: 22},
    ]

    return (
        <>
            <h2>Menu List</h2>
            <CustomComponent render={() =>
                menuList.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }/>
            <p/>
            {
                menuList.map(item => (
                    <CustomComponent key={item.id} render={() => <div>{item.name}</div>}/>
                ))
            }
            <h2>User List</h2>
            <CustomComponent render={() =>
                userList.map(item => (
                    <div key={item.id}>
                        <strong>{item.name}</strong> - 年齡: {item.age}
                    </div>
                ))
            }/>
        </>
    );
}

export default JsxMenuListDemo;
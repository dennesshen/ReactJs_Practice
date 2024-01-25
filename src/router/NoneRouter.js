import React, { useState } from 'react';

function Home() {
    return <h2>Home Page</h2>;
}

function Profile() {
    return <h2>Profile Page</h2>;
}

function Settings() {
    return <h2>Settings Page</h2>;
}

function NoneRouter() {
    const [route, setRoute] = useState('home');

    let Component;
    switch (route) {
        case 'home':
            Component = Home;
            break;
        case 'profile':
            Component = Profile;
            break;
        case 'settings':
            Component = Settings;
            break;
        default:
            Component = Home;
    }

    // 可以查網址列的路徑，並顯示相對應的內容組件
    // 網址列始終是 http://localhost:3000/
    // 但是可以在網頁上點擊 Home、Profile、Settings，並顯示相對應的內容組件
    // 網頁也不會重新載入，只會顯示相對應的內容組件
    // 但是無法上一頁、下一頁，原因是因為網址列始終是 http://localhost:3000/
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ borderRight: '1px solid', padding: '1rem' }}>
                <ul>
                    <li style={{cursor: 'pointer'}} onClick={() => setRoute('home')}>Home</li>
                    <li style={{cursor: 'pointer'}} onClick={() => setRoute('profile')}>Profile</li>
                    <li style={{cursor: 'pointer'}} onClick={() => setRoute('settings')}>Settings</li>
                </ul>
            </div>
            <main style={{ flex: 1, padding: '1rem' }}>
                <Component />
            </main>
        </div>
    );
}

export default NoneRouter;
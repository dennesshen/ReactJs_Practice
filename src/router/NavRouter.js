import {Link, Route, Routes} from "react-router-dom";
import JSXShoppingDemo from "../jsx/JSXShoppingDemo";
import JSXFinanceDemo from "../jsx/JSXFinanceDemo";
import PersonalExpenseTracker from "../jsx/PersonalExpenseTracker";
import JsxMenuListDemo from "../jsx/JSXMenuListDemo";
import JSXMenuListSpicy from "../jsx/JSXMenuListSpicy";
import JSXDangerousDemo from "../jsx/JSXDangerousDemo";
import JsxShoppingCartPropsDemo from "../jsx/JSXShoppingCartPropsDemo";
import FuncApp from "../component/FuncApp";
import ClassApp from "../component/ClassApp";
import HocApp from "../component/HOCApp";
import HocAssetInfo from "../component/HOCAssetInfo";
import Form1 from "../form_list/form/Form1";

function Home() {
    return <h1>Home Page</h1>;
}
function Settings() {
    return <h1>Settings</h1>;
}
function Profile() {
    return <h1>Profile</h1>;
}

function NavRouter(){
    return(
            <div style={{display: 'flex'}}>
                {/* 左邊選單 */}
                <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">profile</Link></li>
                        <li><Link to="/setting">Setting</Link></li>
                    </ul>
                    <ol>
                        Jsx :
                        <li><Link to="/JSXShoppingDemo">Shopping List</Link></li>
                        <li><Link to="/JSXFinanceDemo">Finance List</Link></li>
                        <li><Link to="/PersonalExpenseTracker">Personal Expense List</Link></li>
                        <li><Link to="/JSXMenuList">Shopping List</Link></li>
                        <li><Link to="/JSXMenuListSpicy">Shopping List Spicy</Link></li>
                        <li><Link to="/JSXDangerousDemo">Dangerous Demo</Link></li>
                        <li><Link to="/JSXShoppingCartPropsDemo">Shopping Cart</Link></li>
                    </ol>
                    <ol>
                        Component :
                        <li><Link to="/FuncApp">FuncApp(函數元件)</Link></li>
                        <li><Link to="/ClassApp">ClassApp(類別元件)</Link></li>
                        <li><Link to="/HOCApp">HOCApp(高階組件)</Link></li>
                        <li><Link to="/HOCAssetInfo">HOCAssetInfo(高階組件)</Link></li>
                    </ol>
                    <ol>
                        Form & List :
                        <li><Link to="/Form1">Form1</Link></li>
                    </ol>
                </nav>
                {/* 右邊畫面 */}
                <main style={{flex: 1, padding: '1rem'}}>
                    <Routes>
                        {/* JSX */}
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/setting" element={<Settings />} />
                        <Route path="/JSXShoppingDemo" element={<JSXShoppingDemo />} />
                        <Route path="/JSXFinanceDemo" element={<JSXFinanceDemo />} />
                        <Route path="/PersonalExpenseTracker" element={<PersonalExpenseTracker />} />
                        <Route path="/JSXMenuList" element={<JsxMenuListDemo />} />
                        <Route path="/JSXMenuListSpicy" element={<JSXMenuListSpicy />} />
                        <Route path="/JSXDangerousDemo" element={<JSXDangerousDemo />} />
                        <Route path="/JSXShoppingCartPropsDemo" element={<JsxShoppingCartPropsDemo />} />
                        {/* Component */}
                        <Route path="/FuncApp" element={<FuncApp/>} />
                        <Route path="/ClassApp" element={<ClassApp/>} />
                        <Route path="/HOCApp" element={<HocApp/>} />
                        <Route path="/HOCAssetInfo" element={<HocAssetInfo/>} />
                        {/*Form & List*/}
                        <Route path="/Form1" element={<Form1/>} />

                    </Routes>
                </main>
            </div>
    )
}

export default NavRouter;
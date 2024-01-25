import {Routes, Route} from "react-router-dom";
import Home from "./Home";


function About() {
    return <h1>About</h1>;
}

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}
export default AppRouter;
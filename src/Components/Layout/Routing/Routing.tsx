import App from "../../../App";
import About from "../../Pages/About/About";
import Page404 from "../../Pages/Page404/Page404";
import States from "../../Pages/States/States";
import "./Routing.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
				<Routes>
                <Route path="/" element={<App/>}/>
                <Route index element={<Home />}/>
                <Route path="home" element={<Home/>}/>
                <Route path="states" element={<States/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;

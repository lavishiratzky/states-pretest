import Routing from "../Routing/Routing";
import "./Main.css";
import { Outlet } from "react-router-dom";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <Routing />
            <Outlet />
        </div>
    );
}

export default Main;

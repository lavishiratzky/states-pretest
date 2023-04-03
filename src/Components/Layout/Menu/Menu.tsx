import About from "../../Pages/About/About";
import States from "../../Pages/States/States";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <h1>Menu</h1>
            <a href="/home">Home</a>
            <a href="/states">States</a>
            <a href="/about">About</a>
        </div>
    );
}

export default Menu;

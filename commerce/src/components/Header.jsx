import "../styles/Header.css";
import Electron from "./svgIcons/Electron";
import ShoppingCart from "./svgIcons/Cart";
import SignIn from "./svgIcons/Sign";


export default function Header() {
    return <div className="header">
        <Electron />
        <form>
            <input type="search" />
            <button>search</button>
        </form>
        <div className="icons">
            <a href="#">
                <SignIn />
                {/* <div>Sign In</div> */}
            </a>
            <a href="#">
                <ShoppingCart />
            </a>

        </div>
    </div>
}
import Slider from "./sub/Slider";
import Special from "./sub/Special";
import "../styles/body.css";
import Popular from "../components/sub/Popular";

export default function Body() {
    return <div className="body">
        <Slider />
        <div className="main">
            <div>
                <Popular />
            </div>
            <div>
                <img src="./poster.png" alt="poster" className="poster" />
            </div>
            <Special />
            <div>Brands</div>
        </div>
    </div>
}
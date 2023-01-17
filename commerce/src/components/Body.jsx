import Slider from "./sub/Slider";
import Categories from "./sub/Categories";
import Popular from "./sub/Popular";
import Special from "./sub/Special";
import "../styles/body.css";

export default function Body() {
    return <div className="body">
        <Slider />
        <div className="main">
            <div className="popularProducts">
                <Categories />
                <Popular />
            </div>
            <div>Poster</div>
            <Special />
            <div>Brands</div>
        </div>
    </div>
}
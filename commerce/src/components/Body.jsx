import Slider from "./sub/Slider";
import Categories from "./sub/Categories";
import Popular from "./sub/Popular";
import Special from "./sub/Special";

export default function Body() {
    return <div className="body">
        <Slider />
        <div className="PopularProducts">
            <Categories />
            <Popular />
        </div>
        <div>Poster</div>
        <Special />
        <div>Brands</div>
    </div>
}
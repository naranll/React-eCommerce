import Slider from "./subComp/Slider";
import Categories from "./subComp/Categories";
import Products from "./subComp/Products";
import Special from "./subComp/Special";


export default function Main(){
    return <div>
        <Slider />
        <Categories />
        <Products />
        <div>Poster</div>
        <Special />
        <div>Brands</div>
    </div>
}
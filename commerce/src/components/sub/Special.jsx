import "../../styles/body.css";
import CartIcon from "../../svg/CartIcon";
import { productsData } from "../../util/data";

export default function Special() {
    function limitWords(str) {
        return str.split(' ').filter(function (num) {
            return num !== ''
        }).slice(0, 25).join(' ');
    }

    return <div>
        <div className="special">
            <div>
                <div className="specialBig">
                    <img src={productsData[0].image} alt="specialbig" />
                    <div>
                        <h3>{productsData[0].name}</h3>
                        <h4>${productsData[0].price}</h4>
                        <p>{productsData[0].description}</p>
                        <button className="specialBtn">Add to cart<span><CartIcon /></span></button>
                    </div>
                </div>
            </div>
            <div className="specialSmalls">
                <div className="specialSmall">
                    <img src={productsData[1].image} />
                    <div>
                        <p className="specialDate">Oct 2022</p>
                        <h3>{productsData[1].name}</h3>
                        <h4>${productsData[1].price}</h4>
                        <p>{limitWords(productsData[1].description)}...</p>
                        <p className="specialDecor">By space tech</p>
                    </div>
                </div>
                <div className="specialSmall">
                <img src={productsData[2].image} />
                    <div>
                        <p className="specialDate">Oct 2022</p>
                        <h3>{productsData[2].name}</h3>
                        <h4>${productsData[2].price}</h4>
                        <p>{limitWords(productsData[2].description)}...</p>
                        <p className="specialDecor">By space tech</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
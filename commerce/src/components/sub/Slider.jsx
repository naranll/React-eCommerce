import "../../styles/slider.css";

export default function Slider() {
    return <div className="sliderContainer">
        <div className="sliderText">
            <p>CANON <br /> camera</p>
            <div className="sliderBtns">
                <button className="sliderBtn">Shop now</button>
                <button className="sliderBtn">View more</button>
            </div>
        </div>
        <div className="cameraAdd">
            <img src="./ellipse.svg" alt="ellipse" className="ellipse" />
            <img src="./camera.png" alt="camera" className="camera" />
            <div className="onlySticker">only <br /> $89</div>
        </div>
    </div>
}
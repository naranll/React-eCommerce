import Slider from "./sub/Slider";
import Special from "./sub/Special";
import "../styles/body.css";
import Popular from "./sub/Popular";
import Brands from "../svg/Brands";
import { useState, useEffect, useContext } from "react";

export default function Main() {
    return <div className="body">
        <Slider />

        <div className="main">
            <div>
                <Popular />
            </div>
            <div className="poster">
                <img src="./poster.png" alt="poster" />
            </div>
            <div>
                <Special />
            </div>
            <div className="brands">
                <Brands />
            </div>
        </div>
    </div>
}
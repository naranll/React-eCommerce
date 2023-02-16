import Logo from "../svg/Logo";
import SignIcon from "../svg/SignIcon";
import CartIcon from "../svg/CartIcon";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { BasketContext, UserContext } from "../App";

export default function Header(prop) {
    const { cartItems } = useContext(BasketContext);
    const { currentUser } = useContext(UserContext);
    const { setShowCartModal } = prop;
    const navigate = useNavigate();


    return <div className="header">
        <div onClick={() => { navigate('/') }}>
            <Logo />
        </div>
        <form className="searchBar">
            <input className="searchInput" type="search" placeholder="Search any things" />
            <input className="searchBtn" type="button" value="Search" />
        </form>
        <div className="icons">
            {currentUser ? (<div className="signIn" onClick={() => navigate(`/profile/${currentUser.username}`)}>
                <SignIcon /> Hi, {currentUser.username} </div>) :
                <div className="signIn" onClick={() => navigate('/login')}>
                    <SignIcon />
                    Sign in
                </div>
            }

            <div className="cart" onClick={() => {
                currentUser ? setShowCartModal(true) : navigate('/login')
            }}>
                <CartIcon />
                <div className="insideCart">{cartItems ? cartItems.length : 0}</div>
            </div>

        </div>
    </div>
}
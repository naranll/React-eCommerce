import Logo from "../svg/Logo";
import SignIcon from "../svg/SignIcon";
import CartIcon from "../svg/CartIcon";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductsContext, LoginContext } from "../App";

export default function Header(prop) {
    const { username, cartItems, setCartItems } = useContext(ProductsContext);
    const { loginState } = useContext(LoginContext);
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
            {loginState ? (<div className="signIn" onClick={() => navigate(`/profile/${username}`)}>
                <SignIcon /> Hi, {username} </div>) :
                <div className="signIn" onClick={() => navigate('/login')}>
                    <SignIcon />
                    Sign in
                </div>
            }

            <div className="cart" onClick={() => {
                loginState ? setShowCartModal(true) : navigate('/login')
            }}>
                <CartIcon />
                <div className="insideCart">{cartItems.length}</div>
            </div>

        </div>
    </div>
}
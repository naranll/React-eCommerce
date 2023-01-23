import Logo from "../svg/Logo";
import SignIcon from "../svg/SignIcon";
import CartIcon from "../svg/CartIcon";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header(prop) {
    const navigate = useNavigate();
    const {username, loginState} = prop;
    console.log(username);

    const redirectToProfile = () => {
        navigate(`/profile/${username}`)
    };

    return <div className="header">
        <div onClick={() => { navigate('/') }}>
            <Logo />
        </div>
        <form className="searchBar">
            <input className="searchInput" type="search" placeholder="Search any things" />
            <input className="searchBtn" type="button" value="Search" />
        </form>
        <div className="icons">
            {loginState ? (<div className="signIn" onClick={() => { redirectToProfile }}>
                <SignIcon /> Hi, {username} </div>) :
                <div className="signIn" onClick={() => {navigate('/login')}}>
                    <SignIcon />
                    Sign in
                </div>
            }
            <div className="cart">
                <CartIcon />
                <div className="insideCart">0</div>
            </div>
        </div>
    </div>
}
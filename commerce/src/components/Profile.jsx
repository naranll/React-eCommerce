import { users } from "../util/data";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BasketContext, UserContext } from "../App";
import "../styles/profile.css";

export default function Profile() {
    const { id } = useParams();
    const { setCurrentUser, currentUser } = useContext(UserContext);
    const { setCartItems } = useContext(BasketContext);
    const navigate = useNavigate();

    function logOutHandler() {
        // localStorage.setItem("currentUser", []);
        localStorage.removeItem("currentUser");
        setCurrentUser();
        localStorage.removeItem("cartItems");
        // localStorage.setItem("cartItems", JSON.stringify([]));
        setCartItems([]);
        navigate("/login");
    }

    return <div className="profile">
        user profile:{currentUser.username}
        <button onClick={logOutHandler}>Log Out</button>
    </div>
}
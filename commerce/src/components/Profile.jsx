import { users } from "../util/data";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { ProductsContext, UserContext } from "../App";
import "../styles/profile.css";

export default function Profile() {
    const { id } = useParams();
    const { setCurrentUser, currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    function logOutHandler() {
        localStorage.setItem("currentUser", []);
        setCurrentUser();
        navigate("/login");
    }

    return <div className="profile">
        user profile:{currentUser.username}
        <button onClick={logOutHandler}>Log Out</button>
    </div>
}
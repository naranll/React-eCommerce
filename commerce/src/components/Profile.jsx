import { users } from "../util/data";
import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ProductsContext, LoginContext } from "../App";
import "../styles/profile.css";

export default function Profile(prop) {
    const { id } = useParams();
    const { username } = useContext(ProductsContext);
    const { loginState } = useContext(LoginContext);

    return <div className="profile">
        user profile:{username}
    </div>
    // return <div>
    //     user profile:{users.map((user, i) => {
    //         if (user.username === username) {
    //             return <h1 key={i}>{username}</h1>
    //         }
    //     })}
    // </div>
}
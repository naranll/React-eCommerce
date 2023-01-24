import { users } from "../util/data";
import { useParams } from "react-router-dom"

export default function Profile(prop) {
    // const { id } = useParams();
    const { username } = prop;
    console.log(username);

    return <div>
        user profile:{users.map((user, i) => {
            if (user.username === username) {
                return <h1 key={i}>{username}</h1>
            }
        })}
    </div>
}
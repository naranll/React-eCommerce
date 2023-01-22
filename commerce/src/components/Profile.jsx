import { users } from "../util/data";
import { useParams } from "react-router-dom"

export default function Profile(){
    const {name} = useParams();
    return <div>
        user profile:{users.map((user,i) => {
            if(user.username === name){
                return <h1 key={i}>{name}</h1>
            }
        })}
    </div>
}
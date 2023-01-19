import "../styles/login.css";
import { useState } from "react";
import { users } from "../util/data";


export default function Login() {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [loginState, setLoginState] = useState(false);

    function checkUser(name, pass) {
        if (users.map((user) => { user.username === name && user.password === pass })) {
            setLoginState(true);
            console.log("finally logged");
        }
        console.log("login State at checkPoint:", loginState);
    }

    function getInput(input) {
        input.preventDefault();
        setUserName(input.target.value);
        setUserPass(input.target.value);
        checkUser(userName, userPass);
        console.log("login State at input:", loginState);
    }


    return <div className="loginPage">
        <div className="loginForm">
            <form onSubmit={getInput}>
                <input type="text" placeholder="Email or phone number" name="inName" />
                <input type="text" placeholder="Password" name="inPass" />
                <button type="submit">Sign In</button>
                <input type="button" value="Sign Up" />
            </form>
        </div>
    </div>
}
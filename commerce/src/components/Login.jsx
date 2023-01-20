import "../styles/login.css";
import { useState } from "react";
import { users } from "../util/data";


export default function Login() {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [loginState, setLoginState] = useState(false);


    function checkUser(name, pass) {
        console.log("input:", name, pass);
        users.map((user) => {
            if (user.username === name && user.password === pass) {
                setLoginState(true);
                console.log("finally logged in");
            }
        })
        if (!loginState) {
            console.log("error")
        }
    }



    function getInput(input) {
        input.preventDefault();
        checkUser(input.target.inName.value, input.target.inPass.value);
    }

    function signUp() {
        console.log("sign up btn");
    }

    return <div className="loginPage">
        <div className="loginForm">
            <form onSubmit={getInput}>
                <input type="text" placeholder="Email or phone number" name="inName" />
                <input type="text" placeholder="Password" name="inPass" />
                <button type="submit">Sign In</button>
                <input type="button" value="Sign Up" onClick={() => { signUp }} />
            </form>
        </div>
    </div>
}



  // function checkUser(name, pass) {
    //     if (users.map((user) => { user.username === name && user.password === pass })) {
    //         setLoginState(true);
    //         console.log("finally logged"); //working without checking?
    //     } else {
    //         console.log("not");
    //     }
    //     console.log("input", name, pass)
    //     console.log("login State at checkPoint:", loginState);
    // }
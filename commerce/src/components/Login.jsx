import "../styles/login.css";
import LoginLogo from "../svg/LoginLogo";
import { useNavigate } from "react-router-dom";
// import { users } from "../util/data";


export default function Login(prop) {
    const { loginChecker, loginState } = prop;
    // const navigate = useNavigate();

    // if (loginState) {
    //     navigate('/');
    // }

    function getInput(input) {
        input.preventDefault();
        loginChecker(input.target.inName.value, input.target.inPass.value);
    }

    function register() {
        console.log("register button");
    }

    return <div className="loginPage">
        <div className="loginForm">
            <LoginLogo />
            <form onSubmit={getInput}>
                <input type="text" placeholder="Email or phone number" name="inName" />
                <input type="text" placeholder="Password" name="inPass" />
                <button type="submit">Log In</button>
                <input type="button" onClick={() => register()} value="Register" className="registerBtn" />
            </form>
        </div>
    </div>
}



  // function checkUser(name, pass) {
    //     if (users.map((user) => { user.username === name && user.password === pass })) {
    //         setLoginState(true);
    //         console.log("finally logged"); //works without checking due to .map()
    //     } else {
    //         console.log("not");
    //     }
    //     console.log("input", name, pass)
    //     console.log("login State at checkPoint:", loginState);
    // }


      // if (!loginState) {
        //     console.log("error");
        // }  
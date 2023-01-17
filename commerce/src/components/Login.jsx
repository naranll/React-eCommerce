import "../styles/login.css";


export default function Login() {

    return <div className="loginPage">
        <div className="loginForm">
            <form >
                <input type="text" placeholder="Email or phone number" />
                <input type="text" placeholder="Password" />
                <button>Sign In</button>
                <input type="button" value="Sign Up" />
            </form>
        </div>
    </div>
}
import "../styles/footer.css";
import Logo from "../svg/Logo";
import Social from "../svg/Social";

export default function Footer() {
    return <div className="footer">
        <div className="footerLeft">
            <Logo />
            <Social />
        </div>
        <div className="footerRight">
            © 2023 Tuulai. Built using AQUA and Tuulai Theme.
            Terms and Conditions
        </div>
    </div>
}
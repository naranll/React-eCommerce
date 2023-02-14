import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import CartModal from "./sub/CartModal";
import Button from "react-bootstrap/esm/Button";
import OffcanvasHeader from "react-bootstrap/esm/OffcanvasHeader";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Layout({ children }) {
    const [showCartModal, setShowCartModal] = useState(false);

    return <>
        <Header setShowCartModal={setShowCartModal} />
        {children}
        <Footer />
        {showCartModal && <CartModal setShowCartModal={setShowCartModal} showCartModal={showCartModal} />}
    </>
}
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

export default function CartModal(prop) {
    const { setShowCartModal, showCartModal } = prop;
    console.log("calling modal to show");

    return (
        <Offcanvas show={showCartModal} placement="end" onHide={() => setShowCartModal(false)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    );
}
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import "../../styles/cartModal.css";
import { ProductsContext } from "../../App";
import { useContext } from "react";

export default function CartModal(prop) {
    const { setShowCartModal, showCartModal } = prop;
    const { products, cartItems } = useContext(ProductsContext);

    return (
        <Offcanvas show={showCartModal} placement="end" onHide={() => setShowCartModal(false)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="modal-items">
                    {cartItems.map((id, i) => {
                        let selected = products.find((product) => product.id == id)
                        return <div key={i}>{selected.name}</div>
                    })}

                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
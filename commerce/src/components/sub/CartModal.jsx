import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import "../../styles/cartModal.css";
import { BasketContext } from "../../App";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext, useState, useEffect } from "react";
import CartItem from "../sub/CartItem";

export default function CartModal(prop) {
    const { setShowCartModal, showCartModal } = prop;
    const { cartItems } = useContext(BasketContext);
    const { products } = useContext(ProductsContext);

    let sumOfItems = 0;
    function getItemsPrice(itemPrice) {
        sumOfItems = sumOfItems + itemPrice;
    }

    function onRemove(itemIndex) {
        console.log("onRemove", itemIndex);
        cartItems.splice(itemIndex, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log("after onRemove:", cartItems);
    }

    return (
        <Offcanvas show={showCartModal} placement="end" onHide={() => setShowCartModal(false)} className="cart-offcanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="cart-offcanvas-body">
                {cartItems.map((id, i) => {
                    let cartItem = products.find((product) => product.id == id);
                    getItemsPrice(cartItem.price);
                    return <CartItem key={i} cartItem={cartItem} onRemove={onRemove} itemIndex={i} className="cart-item" />
                })}
            </Offcanvas.Body>
            <div>
                <div className="cart-price">
                    <p>Нийт дүн</p>
                    <p>${sumOfItems}</p>
                </div>
                <Button className="cart-order-btn">Захиалах</Button>
            </div>
        </Offcanvas>
    );
}
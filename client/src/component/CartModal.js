import { useContext } from "react";
import { Context } from "./MyContex";
import { Modal, Button } from 'react-bootstrap';

const CartModal = ({ show, handleClose }) => {
    const { cart } = useContext(Context);

    // Function to calculate total price of items in cart
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.price;
        });
        return totalPrice;
    };

    // Function to format number to IDR currency
    const formatToIDR = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    <div className="d-flex justify-content-between">
                                        <span>{item.brand} - {item.category}</span>
                                        <span>{formatToIDR(item.price)}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <strong>Total:</strong>
                            <strong>{formatToIDR(calculateTotalPrice())}</strong>
                        </div>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => alert("Proceed to checkout")}>
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CartModal;

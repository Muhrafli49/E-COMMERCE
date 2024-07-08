import { useState } from 'react';
import CartModal from './CartModal';

const Navigation = () => {
    const [showCart, setShowCart] = useState(false);

    const handleCartShow = () => setShowCart(true);
    const handleCartClose = () => setShowCart(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Berkah Store</a>
                    <li className="ms-auto me-2 d-flex align-items-center d-lg-none">
                        <button className="btnIcon mx-2" onClick={handleCartShow}>
                            <i className="bi bi-bag position-relative">
                                <div className="circleBadge position-absolute top-0 end-0"></div>
                            </i>
                        </button>
                    </li>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#category-section">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#product-section">Product</a>
                            </li>
                            <li className="d-lg-flex align-items-center d-none">
                                <button className="btnIcon mx-2" onClick={handleCartShow}>
                                    <i className="bi bi-bag position-relative">
                                        <div className="circleBadge position-absolute top-0 end-0"></div>
                                    </i>
                                </button>
                            </li>
                        </ul>
                        <div className="d-flex btnWrapper mt-lg-0 mt-4">
                            <button className="w-100 secondaryBtn">Sign In</button>
                            <button className="w-100 primaryBtn">Log In</button>
                        </div>
                    </div>
                </div>
            </nav>
            <CartModal show={showCart} handleClose={handleCartClose} />
        </>
    );
}

export default Navigation;

import { useContext, useState } from "react";
import { Context } from "./MyContex";

const Product = ({ categoryFilter }) => {
    const { product, addToCart } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState("");

    const handleBuy = (item) => {
        addToCart(item);
        alert("Product added to cart successfully!");
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = product.filter(
        (p) =>
            (p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (!categoryFilter || p.category === categoryFilter)
    );

    return (
        <div className="container" id="product-section">
            {/* Section search */}
            <div className="row justify-content-center mb-2">
                <div className="col-8">
                    <h2 className="text-center tagline mb-4 mt-2">All Product</h2>
                    <div className="input-group">
                        <form className="d-flex w-100">
                            <input
                                className="searchInput"
                                placeholder="Search something..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <button className="primaryBtn" type="button">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Section product card */}
            <div className="row">
                {filteredProducts.map((p) => (
                    <div
                        className="col-lg-md-2 col-md-3 col-6 my-3 position-relative"
                        key={p.id}
                    >
                        <div className="product-card">
                            <div className="image-wraper">
                                <img src={p.image} className="w-100" alt={p.description} />
                            </div>
                            <div>
                                <span className="title-category mt-2">{p.category}</span>
                                <span className="title-brand">{p.brand}</span>
                                <span className="title-description mt-2 mb-3">
                                    {p.description}
                                </span>
                            </div>
                            <div className="price-wraper d-flex align-items-center justify-content-between">
                                <span className="title-price">{p.price}</span>
                                <button className="sm-btnPrimary" onClick={() => handleBuy(p)}>
                                    Buy <i className="bi bi-bag-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;

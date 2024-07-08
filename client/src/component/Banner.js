import { useContext } from "react";
import { Context } from "./MyContex";
import '../App.css';

const BannerPromotion = () => {
    const { banner } = useContext(Context);

    return (
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {banner.map((b, index) => (
                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <img src={b.image} className="d-block w-100 carousel-image" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <i className="bi bi-caret-left-square-fill"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <i className="bi bi-caret-right-square-fill"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default BannerPromotion;

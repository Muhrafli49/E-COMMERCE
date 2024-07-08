import { useContext } from "react";
import { Context } from "./MyContex";

const CategoryCard = () => {
    const { category } = useContext(Context);

    return (
        <div className="container category my-5" id="category-section">
            <div className="title-wraper">
                <h6 className="mx-auto"> Product Category</h6>
            </div>
            <div className="row my-4">
                {category.map((c) => (
                    <div key={c.id} className="col-lg-md-2 col-md-3 col-6 position-relative">
                        <div className="text-center card-category w-100 my-2 my-md-">
                            <img src={c.image} className="w-100" alt={c.description} />
                            <div className="category-label fw-semibold position-absolute bottom-0 w-100">
                                {c.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCard;

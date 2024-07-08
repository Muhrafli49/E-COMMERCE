import Navigation from "./Navigation";
import BannerPromotion from "./Banner";
import CategoryCard from "./CategoryCard";
import Product from "./Product";
import { Provider } from "./MyContex";

const HomePage = () => {
    return (
        <>
        <Provider>
            <Navigation />
            <BannerPromotion />
            <CategoryCard />
            <Product />
        </Provider>
        </>
    )
}

export default HomePage;


// MyContex.js
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const Context = createContext(null);

const Provider = ({children}) => {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [banner, setBanner] = useState([]);
    const [cart, setCart] = useState([]);

    const getDataProduct = async () => {
        const response = await axios.get('http://localhost:5000/product');
        setProduct(response.data);
    };

    const getDataCategory = async () => {
        const response = await axios.get('http://localhost:5000/category');
        setCategory(response.data);
    };

    const getDataBanner = async () => {
        const response = await axios.get('http://localhost:5000/banner');
        setBanner(response.data);
    };

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    useEffect(() => {
        getDataProduct();
        getDataCategory();
        getDataBanner();
    },[]);

    return (
        <Context.Provider value={{product, category, banner, cart, addToCart}}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };

import { useState, useContext, createContext, useEffect } from "react";
import apiFetch from "../services/apiFetch";

const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [trendProducts, setTrendProducts] = useState([]);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const trendProducts = await apiFetch("products/random");
        setTrendProducts(trendProducts.data);
        const categories = await apiFetch("categories");
        setCategories(categories.data);
        const products = await apiFetch("products");
        setProducts(products);
        setIsLoading(false);
      }catch(e) {
        console.error(e);

        setIsLoading(false);
      }
    }

    fetch();
  }, []);
  
  return (
    <ClientContext.Provider
      value={{
        isLoading,
        products,
        cartItems,
        error,
        categories,
        orders,
        trendProducts,
        setOrders,
        setCartItems,
        setError,
        setIsLoading,
        setProducts
      }}
    >
      { children }
    </ClientContext.Provider>
  );
}

const useClient = () => {
  return useContext(ClientContext);
}

export { ClientProvider, useClient };
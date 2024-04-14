import { useState, useContext, createContext, useEffect } from "react";
import apiFetch from "../services/apiFetch";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
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
    <DataContext.Provider
      value={{
        isLoading,
        products,
        cartItems,
        error,
        setCartItems,
        setError
      }}
    >
      { children }
    </DataContext.Provider>
  );
}

const useData = () => {
  return useContext(DataContext);
}

export { DataProvider, useData };

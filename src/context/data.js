import { useState, useContext, createContext, useEffect } from "react";
import apiFetch from "../services/apiFetch";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
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

  const getTrendProducts = (num) => {
    if(!products.data) return [];

    const arr = products.data.slice();
    const result = [];
    for(let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * arr.length);
      result.push(arr[index]);
      arr.splice(index, 1);
    }

    return result;
  }

  const addProduct = async (data) => {
    const newProducts = [data].concat(products.data);
    newProducts.pop();

    setProducts((prev) => ({...prev, data: newProducts}));
  }

  return (
    <DataContext.Provider
      value={{
        isLoading,
        products,
        cartItems,
        error,
        categories,
        setCategories,
        getTrendProducts,
        setCartItems,
        setError,
        addProduct,
        setIsLoading
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

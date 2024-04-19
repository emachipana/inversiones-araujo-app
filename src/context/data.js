import { useState, useContext, createContext, useEffect } from "react";
import apiFetch from "../services/apiFetch";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [vitroOrders, setVitroOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const categories = await apiFetch("categories");
        setCategories(categories.data);
        const products = await apiFetch("products");
        setProducts(products);
        const orders = await apiFetch("orders");
        setOrders(orders);
        const vitroOrders = await apiFetch("vitro_orders");
        setVitroOrders(vitroOrders);
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

  const addProduct = (data) => {
    const newProducts = [data].concat(products.data);
    newProducts.pop();

    setProducts((prev) => ({...prev, data: newProducts}));
  }

  const addVitroOrder = (data) => {
    const newVitrOrders = [data].concat(vitroOrders.data);

    setVitroOrders((prev) => ({...prev, data: newVitrOrders}));
  }
  
  return (
    <DataContext.Provider
      value={{
        isLoading,
        products,
        cartItems,
        error,
        categories,
        orders,
        vitroOrders,
        setOrders,
        setCategories,
        getTrendProducts,
        setCartItems,
        setError,
        addProduct,
        setIsLoading,
        setProducts,
        setVitroOrders,
        addVitroOrder
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

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
  const [productBackup, setProductBackup] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const trendProducts = await apiFetch("products/random");
        setTrendProducts(trendProducts.data);
        const categories = await apiFetch("categories");
        setCategories(categories.data);
        const products = await apiFetch("products");
        setProducts(products);
        setProductBackup(products);
        setIsLoading(false);
      }catch(e) {
        console.error(e);

        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  const addCartProduct = (product, quantity) => {
    const price = product.discount ? product.discount.price : product.price;
    const saveData = {
      id: product.id,
      name: product.name,
      images: product.images,
      quantity,
      price,
      subTotal: quantity * price
    }
    const newItems = [...cartItems, saveData];
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  }

  const emptyCart = () => {
    const newItems = [];
    setCartItems(newItems);
    localStorage.removeItem("cart");
  }
  
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
        productBackup,
        setOrders,
        setCartItems,
        setError,
        setIsLoading,
        setProducts,
        addCartProduct,
        emptyCart
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

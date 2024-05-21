import { createContext, useContext, useEffect, useState } from "react";
import apiFetch from "../services/apiFetch";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [productsBackup, setProductsBackup] = useState({});
  const [vitroOrders, setVitroOrders] = useState({});
  const [events, setEvents] = useState([]);
  const [orders, setOrders] = useState({});
  const [messages, setMessages] = useState({});
  const [clients, setClients] = useState({});
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const orders = await apiFetch("orders");
        setOrders(orders);
        const vitroOrders = await apiFetch("vitro_orders");
        setVitroOrders(vitroOrders);
        const clients = await apiFetch("clients");
        setClients(clients);
        const messages = await apiFetch("messages");
        setMessages(messages);
        const categories = await apiFetch("categories");
        setCategories(categories);
        const products = await apiFetch("products");
        setProducts(products);
        setProductsBackup(products);
        setIsLoading(false);
      }catch(e) {
        console.error(e)
        setIsLoading(false);
        setError(e.message);
      }
    }

    fetch();
  }, []);

  const deleteMessage = async (id, currentPage) => {
    try {
      await apiFetch(`messages/${id}`, { method: "DELETE" });
      let newMessages = await apiFetch(`messages?page=${currentPage}`);
      if(newMessages.data.length <= 0) newMessages = await apiFetch("messages"); 
      setMessages(newMessages);
    }catch(e) {
      console.error(e);
      setError(e.message);
    };
  }

  return (
    <AdminContext.Provider
      value={{
        isLoading,
        products,
        vitroOrders,
        events,
        orders,
        messages,
        error,
        clients,
        categories,
        productsBackup,
        setCategories,
        setIsLoading,
        setProducts,
        setVitroOrders,
        setEvents,
        setOrders,
        setMessages,
        setError,
        setClients,
        deleteMessage,
        setProductsBackup
      }}
    >
      { children }
    </AdminContext.Provider>
  );
}

const useAdmin = () => {
  return useContext(AdminContext);
}

export { AdminProvider, useAdmin };

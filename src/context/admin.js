import { createContext, useContext, useEffect, useState } from "react";
import apiFetch from "../services/apiFetch";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [vitroOrders, setVitroOrders] = useState({});
  const [events, setEvents] = useState([]);
  const [orders, setOrders] = useState({});
  const [messages, setMessages] = useState({});
  const [clients, setClients] = useState({});
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
        setIsLoading(false);
      }catch(e) {
        console.error(e)
        setIsLoading(false);
        setError(e.message);
      }
    }

    fetch();
  }, []);

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
        setIsLoading,
        setProducts,
        setVitroOrders,
        setEvents,
        setOrders,
        setMessages,
        setError,
        setClients
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

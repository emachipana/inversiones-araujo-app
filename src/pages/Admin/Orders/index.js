import { Section } from "../Products/styles";
import { Title } from "../styles";
import OrderCard from "../../../components/OrderCard";
import { useAdmin } from "../../../context/admin";
import Pagination from "../../../components/Pagination";
import apiFetch from "../../../services/apiFetch";

function Orders() {
  const { orders, isLoading, setIsLoading, setOrders } = useAdmin();

  const handlePaginationClick = async (link) => {
    try {
      setIsLoading(true);
      const orders = await apiFetch(link, { isFull: true });
      setOrders(orders)
      setIsLoading(false);
    }catch(e) {
      console.error(e.message);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Title>Pedidos</Title>
      <Section>
        {
          isLoading
          ? "Cargando..."
          : <>
              {
                !orders.data || orders?.data.length <= 0
                ?
                <Title style={{margin: "0 auto"}}>
                  No hay pedidos disponibles
                </Title>
                :
                <>
                  {
                    orders.data.map((order, index) => (
                      <OrderCard
                        id={order.id}
                        destination={order.destination}
                        key={index}
                        client_name={order.client.first_name}
                        status={order.status}
                        ship_type={order.shipping_type}
                        date={order.created_at}
                      />
                    ))
                  }
                  <Pagination 
                    onClick={handlePaginationClick}
                    currentPage={orders.meta.current_page}
                    lastPage={orders.meta.last_page}
                    links={orders.links}
                    pageLinks={orders.meta.links}
                  />
                </>
              }
            </>
        }
      </Section>
    </>
  );
}

export default Orders;

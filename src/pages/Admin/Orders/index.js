import { useState } from "react";
import { MdAdd } from "react-icons/md";
import Button from "../../../components/Button";
import { Filter, Section } from "../Products/styles";
import { Title } from "../styles";
import OrderCard from "../../../components/OrderCard";

function Orders() {
  const [ isOpen, setIsOpen ] = useState(false);
  const orders = [];
  const isLoading = false;
  // const { orders, isLoading, setIsLoading, setError } = useData();

  return (
    <>
      <Title>Pedidos</Title>
      <Section>
        <Filter gap={2}>
          <Button 
            fontSize={17}
            color="white"
          >
            Destino
          </Button>
          <Button 
            fontSize={17}
            color="white"
          >
            Tipo de envío
          </Button>
          <Button 
            fontSize={17}
            color="white"
          >
            Estado
          </Button>
        </Filter>
        <Button
          Icon={MdAdd}
          onClick={() => setIsOpen(true)}
        >
          Crear pedido
        </Button>
      </Section>
      <Section>
        {
          isLoading
          ? "Cargando..."
          : <>
              {
                !orders.data || orders.data.length <= 0
                ?
                <Title style={{margin: "0 auto"}}>
                  No hay pedidos disponibles
                </Title>
                :
                <>
                  {
                    orders.data.map((order, index) => (
                      <OrderCard
                        destination={order.destination}
                        key={index}
                        client_name={order.client.first_name}
                        status={order.status}
                        ship_type={order.shipping_type}
                      />
                    ))
                  }
                </>
              }
            </>
        }
      </Section>
    </>
  );
}

export default Orders;

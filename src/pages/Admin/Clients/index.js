import AdminPagination from "../../../components/AdminPagination";
import Button from "../../../components/Button";
import { useAdmin } from "../../../context/admin";
import { capitalize } from "../../../helpers/capitalize";
import apiFetch from "../../../services/apiFetch";
import { COLORS, FlexRow, Text } from "../../../styles";
import { Title } from "../styles";
import { Container, Section, Table } from "./styles";

function Clients() {
  const { clients, setClients } = useAdmin();

  const handleClick = async (link) => {
    try {
      const clients = await apiFetch(link, { isFull: true });
      setClients(clients);
    }catch(e) {
      console.error(e);
    }
  }

  return (
    <>
      <Title>
        Clientes
      </Title>
      <Section>
        <FlexRow>
          <Button
            color="white"
            size={17}
          >
            Departamento
          </Button>
          <Button
            color="white"
            size={17}
          >
            Ciudad
          </Button>
        </FlexRow>
        <AdminPagination 
          currentPage={clients.meta?.current_page}
          lastPage={clients.meta?.last_page}
          links={clients.links}
          onClick={handleClick}
        />
      </Section>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>
                <Text
                  weight={700}
                  size={17}
                >
                  N°
                </Text>
              </th>
              <th>
                <Text
                  weight={700}
                  size={17}
                >
                  DNI
                </Text>
              </th>
              <th>
                <Text
                  weight={700}
                  size={17}
                >
                  Nombres
                </Text>
              </th>
              <th>
                <Text
                  weight={700}
                  size={17}
                >
                  Apellidos
                </Text>
              </th>
              <th>
                <Text
                  weight={700}
                  size={17}
                >
                  Ubicación
                </Text>
              </th>
              <th>
                <Text
                  weight={700}
                  size={17}
                >
                  Consumo
                </Text>
              </th>
              <th>
                <Text
                  weight={700}
                  size={17}
                >
                  Teléfono
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              clients.data?.map((client, index) => (
                <tr key={index}>
                  <td>
                    <Text
                      weight={700}
                      color={COLORS.dim}
                    >
                      { index + 1 }
                    </Text>
                  </td>
                  <td>
                    <Text
                      weight={700}
                      color={COLORS.dim}
                    >
                      { client.document }
                    </Text>
                  </td>
                  <td>
                    <Text
                      weight={700}
                      color={COLORS.dim}
                    >
                      { capitalize(client.first_name) }
                    </Text>
                  </td>
                  <td>
                    <Text
                      weight={700}
                      color={COLORS.dim}
                    >
                      { capitalize(client.last_name) }
                    </Text>
                  </td>
                  <td>
                    <Text
                      weight={700}
                      color={COLORS.dim}
                    >
                      { client.city }, { client.department }
                    </Text>
                  </td>
                  <td>
                    <Text
                      weight={700}
                      color={COLORS.persian}
                    >
                      S/. { client.consumption.toFixed(2) }
                    </Text>
                  </td>
                  <td>
                    <Text
                      weight={700}
                      color={COLORS.dim}
                    >
                      { client.phone }
                    </Text>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Clients;

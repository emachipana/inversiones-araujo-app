import { useState } from "react";
import AdminPagination from "../../../components/AdminPagination";
import Button from "../../../components/Button";
import { useAdmin } from "../../../context/admin";
import { capitalize } from "../../../helpers/capitalize";
import { COLORS, FlexColumn, FlexRow, Text } from "../../../styles";
import { Title } from "../../Client/styles";
import { Container, Section } from "../Clients/styles";
import { ModalSection, Table } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../../components/Modal";
import apiFetch from "../../../services/apiFetch";

function Messages() {
  const [idToDelete, setIdToDelete] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const { messages, deleteMessage, setMessages } = useAdmin();

  const handleClick = async (link) => {
    try {
      const messages = await apiFetch(link, { isFull: true });
      setMessages(messages);
    }catch(e) {
      console.error(e);
    }
  }

  const handleOpen = (id) => {
    setDeleteModal(true);
    setIdToDelete(id);
  }

  const handleDelete = () => {
    deleteMessage(idToDelete, messages.meta?.current_page);
    setIdToDelete(null);
    setDeleteModal(false);
  }

  return (
    <>
      <Title>
        Mensajes
      </Title>
      <Section>
        <FlexRow>
          <Button
            color="white"
            size={17}
          >
            Fecha
          </Button>
        </FlexRow>
        <AdminPagination 
          currentPage={messages.meta?.current_page}
          lastPage={messages.meta?.last_page}
          onClick={handleClick}
          links={messages.links}
        />
      </Section>
      <Container withPadding>
        <Table>
          <tbody>
            {
              messages.data?.map((message, index) => {
                const created = new Date(message.created_at);
                const options = {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }

                return (
                  <tr key={index}> 
                    <td>
                      <FlexColumn gap={0}>
                        <FlexColumn gap={0}>
                          <Text
                            size={13}
                            weight={600}
                            color={COLORS.taupe}
                          >
                            { capitalize(created.toLocaleDateString("es-ES", options)) }
                          </Text>
                          <Text
                            style={{ marginTop: "-0.5rem" }}
                            size={17}
                            weight={700}
                          >
                            { capitalize(message.full_name) }
                          </Text>
                        </FlexColumn>
                        <FlexColumn gap={0}>
                          <Text
                            weight={600}
                            color={COLORS.dim}
                          >
                            { message.subject }
                          </Text>
                          <Text
                            align="start"
                            style={{ marginTop: "-0.5rem" }}
                            color={COLORS.taupe}
                            size={15}
                            weight={600}
                          >
                            { message.content }
                          </Text>
                        </FlexColumn>
                      </FlexColumn>
                    </td>
                    <td>
                      <FlexColumn
                        gap={1}
                        align="flex-end"
                      >
                        <FlexColumn
                          align="flex-end"
                        >
                          <Text
                            weight={600}
                            color={COLORS.dim}
                          >
                            { message.email }
                          </Text>
                          <Text
                            size={15}
                            weight={600}
                            color={COLORS.dim}
                            style={{ marginTop: "-0.5rem" }}
                          >
                            { message.phone }
                          </Text>
                        </FlexColumn>
                        <FaTrashAlt
                          onClick={() => handleOpen(message.id)}
                          size={18}
                          color={COLORS.red}
                          style={{cursor: "pointer"}}
                        />
                      </FlexColumn>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
      <Modal
        padding="1.2rem"
        isActive={deleteModal}
        setIsActive={setDeleteModal}
      >
        <ModalSection>
          <Text
            size={24}
            weight={700}
          >
            ¿Estas seguro de eliminar el mensaje?
          </Text>
          <FlexRow
            gap={2}
          >
            <Button
              onClick={handleDelete}
              color="danger"
            >
              Eliminar
            </Button>
            <Button
              onClick={() => setDeleteModal(false)}
            >
              Cancelar
            </Button>
          </FlexRow>
        </ModalSection>
      </Modal>
    </>
  );
}

export default Messages;

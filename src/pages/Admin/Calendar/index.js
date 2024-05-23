import { useEffect, useState } from "react";
import { Title } from "../styles";
import { Card, Container, Day, Info, Main, CalendarContainer, Section, Wrapper, Badge } from "./styles";
import { useAdmin } from "../../../context/admin";
import Button from "../../../components/Button";
import { COLORS, FlexColumn, FlexRow, Text } from "../../../styles";
import { capitalize } from "../../../helpers/capitalize";
import { IoMdAdd } from "react-icons/io";
import apiFetch from "../../../services/apiFetch";
import Event from "./Event";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Modal from "../../../components/Modal";
import { Formik } from "formik";
import { Form } from "../Products/styles";
import { validate } from "./validate";
import Input from "../../../components/Input";
import Select from "../../../components/Input/Select";

function Calendar() {
  const ref = new Date();
  const [curMonth, setCurMonth] = useState(ref.getMonth());
  const [modalOpen, setModalOpen] = useState(false);
  const { events, setEvents } = useAdmin();
  const firstDay = new Date(ref.getFullYear(), curMonth, 1);  
  const lastDay = new Date(ref.getFullYear(), curMonth + 1, 0);
  const data = new Array(firstDay.getDay()).fill(undefined);
  const monthName = firstDay.toLocaleDateString("es-ES", { month: "long" });

  for(let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
    data.push(i);
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const events = await apiFetch(`events?month[eq]=${monthName}`);
        setEvents(events);
      }catch(e) {
        console.error(e.message);
      }
    }

    fetch();
  }, [ curMonth, monthName, setEvents ]);

  const initialValues = {
    name: "",
    description: "",
    date: "",
    event_type: ""
  };

  const handleSubmit = async (values) => {
    try {
      await apiFetch("events", { body: values });
      const events = await apiFetch(`events?month[eq]=${monthName}`);
      setEvents(events);
      setModalOpen(false);
    }catch(e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <Title>Calendario</Title>
      <Container>
        <Info>
          <Button
            onClick={() => setModalOpen(true)}
            size="full"
            Icon={IoMdAdd}
          >
            Agregar evento
          </Button>
          <Card>
            <Text
              weight={700}
              size={18}
            >
              { capitalize(monthName) }
            </Text>
            <CalendarContainer>
              <Text
                weight={700}
                color={COLORS.taupe}
              >
                D
              </Text>
              <Text
                weight={700}
                color={COLORS.taupe}
              >
                L
              </Text>
              <Text
                weight={700}
                color={COLORS.taupe}
              >
                M
              </Text>
              <Text
                weight={700}
                color={COLORS.taupe}
              >
                M
              </Text>
              <Text
                weight={700}
                color={COLORS.taupe}
              >
                J
              </Text>
              <Text
                weight={700}
                color={COLORS.taupe}
              >
                V
              </Text>
              <Text
                weight={700}
                color={COLORS.taupe}
              >
                S
              </Text>
              {
                data.map((day, index) => (
                  <Day
                    key={index}
                    isActive={day === ref.getDate() && ref.getMonth() === firstDay.getMonth()}
                    day={day}
                  >
                    <Text
                      weight={600}
                    >
                      { day }
                    </Text>
                  </Day>
                ))
              }
            </CalendarContainer>
          </Card>
          <FlexColumn 
            style={{alignSelf: "flex-start", padding: "2px"}}
            gap={1}
          >
            <Text
              size={18}
              weight={700}
            >
              Eventos
            </Text>
            {
              events.data?.map((event, index) => (
                <Event
                  key={index}
                  type={event.event_type}
                  name={event.name}
                  date={event.date}
                />
              ))
            }
          </FlexColumn>
        </Info>
        <Main>
          <Section>
            <Text
              size={16.7}
              weight={700}
            >
              { capitalize(ref.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" })) }
            </Text>
            <FlexRow
              gap={0.2}
            >
              <FaCaretLeft 
                size={24}
                style={{cursor: "pointer"}}
                onClick={() => setCurMonth(curMonth - 1)}
              />
              <FaCaretRight 
                size={24}
                style={{cursor: "pointer"}}
                onClick={() => setCurMonth(curMonth + 1)}
              />
            </FlexRow>
          </Section>
          <CalendarContainer gap="0 0">
            <Wrapper>
              <Text
                weight={700}
              >
                Domingo
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                weight={700}
              >
                Lunes
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                weight={700}
              >
                Martes
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                weight={700}
              >
                Miércoles
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                weight={700}
              >
                Jueves
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                weight={700}
              >
                Viernes
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                weight={700}
              >
                Sábado
              </Text>
            </Wrapper>
            {
              data.map((day, index) => {
                const event = events.data?.find(event => {
                  const date = new Date(event.date);

                  return date.getDate() === day;
                });

                return (
                  <Wrapper
                    bgColor="transparent"
                    key={index}
                    type="day"
                    current={day === ref.getDate() && ref.getMonth() === firstDay.getMonth()}
                    day={day}
                  >
                    <Text
                      weight={700}
                      size={24}
                    >
                      { day }
                    </Text>
                    {
                      day && event 
                      &&
                      <Badge>
                        <Text
                          weight={700}
                          size={13}
                          style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}
                          color="white"
                        >
                          { event.name }
                        </Text>
                      </Badge>
                    }
                  </Wrapper>
                )
              })
            }
          </CalendarContainer>
        </Main>
      </Container>
      <Modal
        isActive={modalOpen}
        setIsActive={setModalOpen}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <Title
                color={COLORS.persian}
                size={1.8}
                style={{marginBottom: "0.5rem"}}
              >
                Crear evento
              </Title>
              <Input 
                id="name"
                label="Actividad"
                placeholder="Ingresa el nombre de la actividad"
                value={values.name}
                touched={touched.name}
                error={errors.name}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Input 
                id="description"
                label="Descripción"
                placeholder="Describe la actividad"
                value={values.description}
                touched={touched.description}
                error={errors.description}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Input 
                id="date"
                label="Fecha"
                type="date"
                value={values.date}
                touched={touched.date}
                error={errors.date}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Select 
                handleChange={handleChange}
                id="event_type"
                label="Tipo de actividad"
                options={[
                  {
                    id: "invitro",
                    content: "Invitro"
                  },
                  {
                    id: "viaje",
                    content: "Viaje"
                  },
                  {
                    id: "cotidiano",
                    content: "Cotidiano"
                  }
                ]}
                error={errors.event_type}
                handleBlur={handleBlur}
                touched={touched.event_type}
              />
              <Button
                size="full"
                style={{marginTop: "0.5rem"}}
                type="submit"
                disabled={!isValid}
              >
                Agregar
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default Calendar;

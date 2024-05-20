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

function Calendar() {
  const ref = new Date();
  const [curMonth, setCurMonth] = useState(ref.getMonth());
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
      const events = await apiFetch(`events?month[eq]=${monthName}`);
      setEvents(events);
    }

    fetch();
  }, [ curMonth, monthName, setEvents ]);

  return (
    <>
      <Title>Calendario</Title>
      <Container>
        <Info>
          <Button
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
    </>
  );
}

export default Calendar;

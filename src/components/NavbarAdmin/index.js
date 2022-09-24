import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Container, Name, Bell, Point, Row, User, Notifications, Notification, Text, Section } from "./styles";
import { IoIosNotifications } from "react-icons/io";
import { useState } from "react";
import 'simplebar/dist/simplebar.min.css';

function NavbarAdmin({ requests }) {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Bell
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoIosNotifications
            size="25px"
          />
          {
            requests.length >= 1
            &&
            <Point />
          }
        </Bell>
        <Row
          onClick={() => navigate("/profile")}
          style={{cursor: "pointer"}}
          gap="0.5rem">
          <User 
            alt="user"
            src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
          />
          <Name>
            { user.name }
          </Name>
        </Row>
      </Row>
      <Notifications
        isOpen={isOpen}
      >
        <Text
          style={{color: "#1D1D1D", fontSize: "14px", margin: "0.5rem 0 0 0.5rem"}}
        >Notificaciones: </Text>
        <Section>
          { requests.map((request, id) => (
            <Notification
              key={id}
              onClick={() => navigate("/requests")}
            >
              <Text
                style={{color: "#1D1D1D"}}
              >
                Solicitud de { request.client_name.split(" ")[0] }
              </Text>
              <Text>
                <span
                  style={{color: "#1D1D1D"}}
                >Mensaje: </span>{ request.message }
              </Text>
            </Notification>
          )) }
        </Section>
      </Notifications>
    </Container>
  );
}

export default NavbarAdmin;

import { IoNotifications } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { COLORS, FlexRow, Text } from "../../styles";
import Search from "../Search";
import { Container, Logo, Notification, Point, Profile } from "./styles";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function AdminNavbar({ setIsOpen }) {
  const navigate = useNavigate();

  return (
    <Container>
      <HiOutlineMenuAlt2
        size={28}
        color={COLORS.white}
        style={{cursor: "pointer"}}
        className="activer"
        onClick={() => setIsOpen(true)}
      />
      <FlexRow
        gap={3.5}
      >
        <FlexRow
          onClick={() => navigate("/admin")}
          style={{cursor: "pointer"}}
        >
          <Logo 
            alt="logo"
            src="/img/h.png"
          />
          <Text
            color={COLORS.white}
            weight={800}
            size={19}
          >
            Inversiones Araujo
          </Text>
        </FlexRow>
        <Search
          className="handler"
          placeholder="Buscar"
          backgroundColor="white"
        />
      </FlexRow>
      <FlexRow gap={1.5}>
        <Notification>
          <IoNotifications 
            size={25}
            color={COLORS.white}
          />
          <Point />
        </Notification>
        <Notification>
          <MdEmail 
            size={25}
            color={COLORS.white}
          />
          <Point />
        </Notification>
        <Profile 
          alt="user-profile"
          src="/img/person.jpg"
        />
      </FlexRow>
    </Container>
  );
}

export default AdminNavbar;

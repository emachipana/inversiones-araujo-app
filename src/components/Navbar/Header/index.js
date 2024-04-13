import { IoPersonSharp, IoPersonAddSharp } from "react-icons/io5";
import { Container, Handler } from "./styles";
import { Text } from "../../../styles";

function Header({ current, setCurrent }) {
  return (
    <Container>
      <Handler 
        isActive={current === "login"}
        onClick={() => setCurrent("login")}
      >
        <IoPersonSharp
          style={{marginTop: "-2px"}}
        />
        <Text
          size={18}
          weight={600}
        >
          Iniciar sesión
        </Text>
      </Handler>
      <Handler 
        isActive={current === "register"}
        onClick={() => setCurrent("register")}
        gap={8}
      >
        <IoPersonAddSharp
          style={{marginTop: "-2px"}}
        />
        <Text
          size={18}
          weight={600}
        >
          Registrarse
        </Text>
      </Handler>
    </Container>
  );
}

export default Header;

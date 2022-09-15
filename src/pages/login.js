/** @jsxImportSource @emotion/react */
import SessionForm from "../components/SessionForm";
import { Banner, Section, Wrapper } from "./styles";
import { BiArrowBack } from "react-icons/bi";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Banner src="img/login-banner.jpg" alt="login-banner" />
      <Section>
          <Button 
            style={{alignSelf: "flex-start"}}
            onClick={() => navigate("/")}
          > 
            <BiArrowBack
              size="20px"
            />
            Regresar
          </Button>
        <SessionForm />  
      </Section>
    </Wrapper>
  );
}

export default LoginPage;

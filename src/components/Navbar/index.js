/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlinePhone, MdAlternateEmail } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Container, Form, IconStyle, Info, Logo, Main, NavStyle, Navigation } from "./styles";
import { COLORS, FlexColumn, FlexRow, Text } from "../../styles";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "../Input";
import Modal from "../Modal";
import Header from "./Header";
import { Formik } from "formik";
import validate from "./validate";
import Button from "../Button";
import DropDown from "../DropDown";
import CartButton from "./CartButton";
import NavItem from "./NavItem";
import Menu from "./Menu";
import Search from "../Search";
import Aside from "./Aside";
import Cart from "../Cart";
import { useClient } from "../../context/client";

function Navbar({ userModal, setUserModal }) {
  const [dropDown, setDropDown] = useState(false);
  const [current, setCurrent] = useState("login");
  const [menuDrop, setMenuDrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { cartItems } = useClient();

  const handleSubmit = (values) => console.log(values); 

  const initialValues = {
    email: "",
    password: "",
    password_confirm: ""
  }

  const handleToggle = () => {
    if(isOpen) setIsOpen(false);

    setUserModal(!userModal);
  }

  return (
    <Container>
      <Info>
        <FlexRow>
          <MdOutlineMailOutline 
            color={COLORS.persian}
            size={18}
          />
          <Text
            size={14}
            color={COLORS.white}
          >
            inversionesaraujojl@gmail.com
          </Text>
        </FlexRow>
        <FlexRow>
          <MdOutlinePhone 
            color={COLORS.persian}
            size={18}
          />
          <Text
            size={14}
            color={COLORS.white}
          >
            +51 990849369
          </Text>
        </FlexRow>
      </Info>
      <Main>
        <HiOutlineMenuAlt2
          size={28}
          color={COLORS.dim}
          style={{cursor: "pointer"}}
          className="activer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Logo
          src="/img/logo.png"
          onClick={() => navigate("/")}
        />
        <Search 
          className="handler"
        />
        <FlexRow
          gap={1.8}
        >
          <IoPersonSharp
            className="handler"
            css={IconStyle}
            onClick={handleToggle}
            color={userModal ? COLORS.persian: ""}
          />
          <Text
            className="handler"
            color={COLORS.dim}
            size={26}
            weight={300}
          >
            |
          </Text>
          <DropDown
            isOpen={dropDown}
            Button={CartButton}
            buttonData={{
              counter: cartItems.length,
              dropDown
            }}
            setIsOpen={setDropDown}
          >
            <Cart />
          </DropDown>
        </FlexRow>
      </Main>
      <Navigation>
        <Text
          className="handler"
          weight={700}
          css={NavStyle}
          color={pathname === "/" ? COLORS.persian : ""}
          onClick={() => navigate("/")}
        >
          Inicio
        </Text>
        <DropDown
          className="handler"
          Button={NavItem}
          isOpen={menuDrop}
          setIsOpen={setMenuDrop}
        >
          <Menu
            navigate={navigate}
          />
        </DropDown>
        <a
          href="http://localhost:3000/agroinvitro"
          target="_blank"
          rel="noreferrer"
        >
          <Text
            weight={700}
            css={NavStyle}

            className="handler"
          >
            Agroinvitro
          </Text>
        </a>
        <Text
          weight={700}
          css={NavStyle}
          className="handler"
          onClick={() => navigate("/servicios")}
          color={pathname === "/servicios" ? COLORS.persian : ""}
        >
          Servicios
        </Text>
        <Text
          weight={700}
          css={NavStyle}
          className="handler"
          onClick={() => navigate("/contactanos")}
          color={pathname === "/contactanos" ? COLORS.persian : ""}
        >
          Contáctanos
        </Text>
        <Text
          weight={700}
          css={NavStyle}
          className="handler"
          onClick={() => navigate("/nosotros")}
          color={pathname === "/nosotros" ? COLORS.persian : ""}
        >
          Sobre nosotros
        </Text>
        <Search 
          className="activer"
        />
      </Navigation>
      <Modal
        isActive={userModal}
        setIsActive={setUserModal}
      >
        <Header
          current={current}
          setCurrent={setCurrent}
        />
        <Formik
          initialValues={initialValues}
          validate={(values) => validate(values, current)}
          onSubmit={handleSubmit}
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
              <Input 
                Icon={MdAlternateEmail}
                error={errors.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
                id="email"
                placeholder="Correo electronico"
                touched={touched.email}
                value={values.email}
              />
              <Input 
                Icon={RiLockPasswordFill}
                error={errors.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
                id="password"
                placeholder="Contraseña"
                type="password"
                touched={touched.password}
                value={values.password}
              />
              {
                current === "register" &&
                <Input 
                  Icon={RiLockPasswordFill}
                  error={errors.password_confirm}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  id="password_confirm"
                  placeholder="Confirmar contraseña"
                  type="password"
                  touched={touched.password_confirm}
                  value={values.password_confirm}
                />
              }
              <FlexColumn style={{width: "100%"}}>
                <FlexRow gap={1}>
                  <Text
                    color={COLORS.taupe}
                    size={15}
                    weight={400}
                  >
                    {
                      current === "login"
                      ? "¿No tienes una cuenta?"
                      : "¿Ya tienes una cuenta?" 
                    }
                  </Text>
                  <Text
                    color={COLORS.blue}
                    size={15}
                    weight={400}
                    isLink
                    onClick={() => setCurrent(current === "login" ? "register" : "login")}
                  >
                    {
                      current === "login"
                      ? "Registrarse"
                      : "Iniciar sesión" 
                    }
                  </Text>
                </FlexRow>
                {
                  current === "login"
                  &&
                  <Text
                    color={COLORS.blue}
                    size={15}
                    weight={400}
                    isLink
                  >
                    Olvidé mi contraseña
                  </Text>
                }
              </FlexColumn>
              <Button
                type="submit"
                color="primary"
                disabled={!isValid}
              >
                {
                  current === "login"
                  ? "Iniciar sesión"
                  : "Registrarse"
                }
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
      <Aside
        handleToggle={handleToggle}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="activer"
      />
    </Container>
  )
}

export default Navbar;

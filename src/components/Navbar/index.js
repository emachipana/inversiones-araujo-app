/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { IoSearchOutline, IoPersonSharp } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlinePhone, MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaBasketShopping } from "react-icons/fa6";
import { CartItems, Container, Form, IconStyle, Info, Logo, Main, NavItem, Navigation } from "./styles";
import { COLORS, FlexColumn, FlexRow, Text } from "../../styles";
import Input from "../Input";
import Modal from "../Modal";
import Header from "./Header";
import { Formik } from "formik";
import validate from "./validate";
import Button from "../Button";
import DropDown from "../DropDown";
import CartButton from "./CartButton";
import TextItem from "./NavItem";
import Menu from "./Menu";

function Navbar() {
  const [param, setParam] = useState("");
  const [userModal, setUserModal] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [current, setCurrent] = useState("login");
  const [menuDrop, setMenuDrop] = useState(false);
  const cartItems = [];

  const handleChange = (e) => {
    setParam(e.target.value);
  }

  const handleSubmit = (values) => console.log(values); 

  const initialValues = {
    email: "",
    password: "",
    password_confirm: ""
  }

  const handleToggle = () => {
    if(dropDown) setDropDown(false);
    if(menuDrop) setMenuDrop(false);

    setUserModal(!userModal);
  }

  return (
    <Container>
      <Info>
        <FlexRow>
          <MdOutlineMailOutline 
            color={COLORS.persian}
            size={20}
          />
          <Text
            size={15}
            color={COLORS.white}
          >
            inversionesaraujojl@gmail.com
          </Text>
        </FlexRow>
        <FlexRow>
          <MdOutlinePhone 
            color={COLORS.persian}
            size={20}
          />
          <Text
            size={15}
            color={COLORS.white}
          >
            +51 990849369
          </Text>
        </FlexRow>
      </Info>
      <Main>
        <Logo 
          src="/img/logo.png"
        />
        <div style={{width: "300px"}}>
          <Input 
            id="search"
            Icon={IoSearchOutline}
            handleChange={handleChange}
            placeholder="Buscar productos"
            value={param}
          />
        </div>
        <FlexRow
          gap={1.8}
        >
          <IoPersonSharp 
            css={IconStyle}
            onClick={handleToggle}
            color={userModal ? COLORS.persian: ""}
          />
          <Text
            color={COLORS.dim}
            size={26}
            weight={300}
          >
            |
          </Text>
          <DropDown
            isOpen={dropDown}
            setIsOpen={setDropDown}
            Button={CartButton}
            buttonData={{counter: cartItems.length, dropDown, setDropDown}}
          >
            {
              cartItems.length === 0
              ?
              <CartItems>
                <FaBasketShopping 
                  size={100}
                  color={COLORS.taupe}
                />
                <Text
                  size={19}
                  weight={700}
                  color={COLORS.dim}
                >
                  El carrito esta vacío
                </Text>
                <Button>
                  Ir a la tienda
                </Button>
              </CartItems>
              : ""
            }
          </DropDown>
        </FlexRow>
      </Main>
      <Navigation>
        <Text
          weight={700}
          css={NavItem}
          color={COLORS.persian}
        >
          INICIO
        </Text>
        <DropDown
          Button={TextItem}
          buttonData={{dropDown: menuDrop, setDropDown: setMenuDrop, weight: 700, css: NavItem, name: "TIENDA"}}
          isOpen={menuDrop}
        >
          <Menu />
        </DropDown>
        <Text
          weight={700}
          css={NavItem}
        >
          AGROINVITRO
        </Text>
        <Text
          weight={700}
          css={NavItem}
        >
          SERVICIOS
        </Text>
        <Text
          weight={700}
          css={NavItem}
        >
          CONTACTANOS
        </Text>
        <Text
          weight={700}
          css={NavItem}
        >
          SOBRE NOSOTROS
        </Text>
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
    </Container>
  )
}

export default Navbar;

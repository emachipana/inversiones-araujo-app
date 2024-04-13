/** @jsxImportSource @emotion/react */
import { IoClose } from "react-icons/io5";
import { Close, Container, Section } from "./styles";

function Modal({ isActive, setIsActive, children, size }) {
  // size: sm, lg

  return (
    isActive
    &&
    <Container
      onClick={() => setIsActive(!isActive)}
      isActive={isActive}
    >
      <Section
        onClick={(e) => e.stopPropagation()}
        size={size}
      >
        <IoClose
          onClick={() => setIsActive(!isActive)} 
          css={Close}
        />
        { children }
      </Section>
    </Container>
  );
}

export default Modal;

/** @jsxImportSource @emotion/react */
import { IoClose } from "react-icons/io5";
import { Close, Container, Section } from "./styles";

function Modal({ isActive, setIsActive, children, size, padding }) {
  // size: sm, lg

  return (
    isActive
    &&
    <Container
      onClick={() => setIsActive(!isActive)}
      isActive={isActive}
    >
      <Section
        padding={padding}
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

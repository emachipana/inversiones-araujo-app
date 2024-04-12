import { Container } from "./styles";

function DropDown({ isOpen, children, Button, buttonData }) {
  return (
    <div style={{position: "relative"}}>
      <Button {...buttonData} />
      {
        isOpen
        &&
        <Container>
          {children}
        </Container>
      }
    </div>
  )
}

export default DropDown;

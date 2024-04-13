import { Container } from "./styles";

function DropDown({ isOpen, children, Button, buttonData, ...props }) {
  return (
    <div style={{position: "relative"}} {...props}>
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

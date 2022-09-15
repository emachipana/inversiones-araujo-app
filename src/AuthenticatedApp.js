import { Button } from "reactstrap";
import { useAuth } from "./context/auth";

function AuthenticatedApp() {
  const { user, logout } = useAuth();
  
  return (
    <>
      <h1>Hola { user.name }</h1>
      <Button color="danger" onClick={() => logout()}>Logout</Button>
    </>
  )
}

export default AuthenticatedApp;

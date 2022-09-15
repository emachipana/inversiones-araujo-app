import { Spinner } from "reactstrap";
import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user, isLoading } = useAuth();

  return (
      isLoading
      ?
      <Spinner />
      :
      (
        user ? <AuthenticatedApp /> : <UnauthenticatedApp />
      )  
  );
}

export default App;

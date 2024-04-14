import { Routes, Route } from "react-router-dom";
import AdminApp from "./AdminApp";
import AgroinvitroApp from "./AgroinvitroApp";
import { DataProvider } from "./context/data";
import ClientApp from "./ClientApp";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route index path="/*" element={<ClientApp />} />
        <Route path="admin/*" element={<AdminApp />} />
        <Route path="agroinvitro/*" element={<AgroinvitroApp />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

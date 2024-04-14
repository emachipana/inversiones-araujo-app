import { Routes, Route } from "react-router-dom";
import AdminApp from "./AdminApp";
import AgroinvitroApp from "./AgroinvitroApp";
import MainApp from "./MainApp";
import { DataProvider } from "./context/data";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route index path="/*" element={<MainApp />} />
        <Route path="admin/*" element={<AdminApp />} />
        <Route path="agroinvitro/*" element={<AgroinvitroApp />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

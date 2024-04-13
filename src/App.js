import { Routes, Route } from "react-router-dom";
import AdminApp from "./AdminApp";
import AgroinvitroApp from "./AgroinvitroApp";
import MainApp from "./MainApp";

function App() {
  return (
    <Routes>
      <Route index path="/*" element={<MainApp />} />
      <Route path="admin/*" element={<AdminApp />} />
      <Route path="agroinvitro/*" element={<AgroinvitroApp />} />
    </Routes>
  );
}

export default App;

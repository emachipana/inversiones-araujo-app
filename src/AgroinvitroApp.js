import { Route, Routes } from "react-router-dom";

function AgroinvitroApp() {
  return (
    <>
      <h1>Agro invitro navbar</h1>
      <Routes>
        <Route index exact path="/" element={<h1>agroinvitro home page</h1>} />
      </Routes>
    </>
  );
}

export default AgroinvitroApp;

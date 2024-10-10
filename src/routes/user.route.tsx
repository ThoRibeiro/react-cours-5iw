import { Route, Routes } from "react-router-dom";
import Home from "../pages/homeSpace/home";
import Settings from "../pages/settings/settings";
import Body from "../components/body/body";

export default function UserRoute() {
  const isAdmin = false;

  return (
    <Routes>
      <Route
        path="home"
        element={
          <Body>
            <Home>
              {isAdmin ? <div>Profile Admin</div> : <div>Profile Utilisateur</div>}
            </Home>
          </Body>
        }
      />
      <Route
        path="settings"
        element={
          <Body>
            <Settings />
          </Body>
        }
      />
    </Routes>
  );
}

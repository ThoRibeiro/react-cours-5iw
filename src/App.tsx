import "./app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UserRoute from "./routes/user.route";
import { DarkThemeProvider } from "./contexts/darkThemeContext";
import { AuthProvider } from "./contexts/authContext";
import LoginForm from "./pages/loginForm/loginForm";
import Login from "./components/login/login";

function App() {
  return (
    <DarkThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login"element={
                <LoginForm>
                  <Login />
                </LoginForm>
              }
            />
            <Route path="/user/*"element={
                <ProtectedRoute>
                  <UserRoute />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </DarkThemeProvider>
  );
}

export default App;

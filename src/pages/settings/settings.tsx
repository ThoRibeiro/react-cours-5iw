import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/darkThemeContext";

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`settings-container ${darkTheme ? "dark" : ""}`}
      style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}
    >
      <h1>Paramètres</h1>
      <button onClick={() => navigate("/user/home")}>Retour à l'accueil</button>
      <button
        className="button"
        onClick={toggleTheme}
        style={{ marginLeft: "10px" }}
      >
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Settings;

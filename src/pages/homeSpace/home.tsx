import React from "react";
import { useNavigate } from "react-router-dom";
import ProductGrid from "../productsGrid/productGrid";
interface HomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <ProductGrid></ProductGrid>
      {children}

      <button onClick={() => navigate("/user/settings")}>
        Aller aux paramètres
      </button>
    </div>
  );
};
export default Home;

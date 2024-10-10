import { forwardRef } from "react";
import { useTheme } from "../../contexts/darkThemeContext";
import "./productCard.css";
import { Product } from "../../interfaces/product";

type ProductCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product, addToCart }, ref) => {
    const { darkTheme } = useTheme();

    return (
      <div
        ref={ref}
        className={`product-card-container ${darkTheme ? "dark" : ""}`}
      >
        <div className="product-card-details">
          <h3 className={darkTheme ? "dark" : ""}>{product.name}</h3>
          <p className={darkTheme ? "dark" : ""}>{product.description}</p>
          <p className={`product-card-price ${darkTheme ? "dark" : ""}`}>
            {product.price}€
          </p>
          <button
            className={`button ${darkTheme ? "dark" : ""}`}
            onClick={() => addToCart(product)}
          >
            Ajouter au panier 😎
          </button>
        </div>
      </div>
    );
  }
);

export default ProductCard;
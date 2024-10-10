import { Product } from "../../interfaces/product";
import "./cart.css";

export const Cart: React.FC<{
  cart: { [key: number]: number };
  products: Product[];
}> = ({ cart, products }) => {
  return (
    <div className="cart-container">
      <h2>Panier</h2>
      {Object.keys(cart).map((productId) => {
        const product = products.find((p) => p.id === parseInt(productId));
        if (!product) return null;
        return (
          <p key={product.id}>
            {product.name}: {cart[product.id]}
          </p>
        );
      })}
      <button className="cart-footer"> Payer </button>
    </div>
  );
};
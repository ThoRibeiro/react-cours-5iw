import { useState } from "react";
import ProductCard from "../../components/productCard/productCard";
import "./ProductGrid.css";
import { Product } from "../../interfaces/product";
import { Cart } from "../../components/cart/cart";

const products: Product[] = [
  { id: 1, name: "Datte", description: "Datte", price: 1 },
  { id: 2, name: "Baie de sureau", description: "Baies de sureau saines ", price: 2 },
  { id: 3, name: "Cerise", description: "Cerises rouges sucrées", price: 5 },
  { id: 4, name: "Pomme", description: "Pomme délicieuses", price: 7 },
  { id: 5, name: "Banane ", description: "Banane jaune mûre", price: 5.99,},
  { id: 6, name: "Figue", description: "Figues juteuses", price: 5 },
];

const ProductGrid = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (product: Product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: (prevCart[product.id] || 0) + 1,
    }));
  };

  return (
    <div className="grid-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} products={products} />
    </div>
  );
};

export default ProductGrid;
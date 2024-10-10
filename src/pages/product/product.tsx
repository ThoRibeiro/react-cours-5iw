import ProductCard from "../../components/productCard/productCard";
import { Product } from "../../interfaces/product";
import "./productGrid.css";
import { ReactNode } from "react";

const products = [
  {
    id: 1,
    name: "Produit 1",
    description: "Description 1",
    price: 29.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Produit 2",
    description: "Description 2",
    price: 39.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Produit 3",
    description: "Description 3",
    price: 49.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Produit 4",
    description: "Description 4",
    price: 19.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Produit 5",
    description: "Description 5",
    price: 59.99,
    image: "https://via.placeholder.com/200",
  }
];

const ProductGrid = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={function (product: Product): void {
          throw new Error("Function not implemented.");
        } } />
      ))}
      {children}
    </div>
  );
};

export default ProductGrid;

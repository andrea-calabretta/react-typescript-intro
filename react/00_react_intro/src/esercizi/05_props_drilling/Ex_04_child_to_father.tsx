import { useState } from "react";

// Componente genitore: Carrello degli acquisti
interface CartItem {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]); // Aggiunge l'articolo al carrello
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Product id={1} name="Laptop" price={999} addToCart={addToCart} />
      <Product id={2} name="Smartphone" price={499} addToCart={addToCart} />
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente figlio: Prodotto
interface IProductProps {
  id: number;
  name: string;
  price: number;
  addToCart: (item: CartItem) => void;
}

const Product = ({ id, name, price, addToCart }: IProductProps) => {
  const handleAddToCart = () => {
    const item = { id, name, price };
    addToCart(item); // Passa i dati del prodotto al componente genitore
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ShoppingCart;

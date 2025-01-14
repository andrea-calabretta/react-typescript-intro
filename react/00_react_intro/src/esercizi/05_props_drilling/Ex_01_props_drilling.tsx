import  { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Smartphone", price: 699 },
  ]);

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {items.length > 0 ? (
        items.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

interface ICartItemProps {
  item: { id: number; name: string; price: number };
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onRemove }: ICartItemProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <button onClick={() => onRemove(item.id)}>Remove from Cart</button>
    </div>
  );
};

export default ShoppingCart;

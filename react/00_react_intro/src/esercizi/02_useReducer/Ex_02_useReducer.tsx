/* eslint-disable no-case-declarations */
import  { useReducer } from 'react';

interface ICartItem {
  id: number;
  name: string;
  price: number;
}

interface ICartState {
  items: ICartItem[];
  total: number;
}

type Action =
  | { type: 'addItem'; payload: ICartItem }
  | { type: 'removeItem'; payload: number } // id dell'articolo da rimuovere
  | { type: 'clearCart' };

const calculateTotal = (items: ICartItem[]): number => {
  return items.reduce((total, item) => total + item.price, 0);
};

const cartReducer = (state: ICartState, action: Action): ICartState => {
  switch (action.type) {
    case 'addItem':
      const updatedItems = [...state.items, action.payload];
      return { items: updatedItems, total: calculateTotal(updatedItems) };
      
    case 'removeItem':
      const filteredItems = state.items.filter((item, i) => i !== action.payload);
      return { items: filteredItems, total: calculateTotal(filteredItems) };

    
    case 'clearCart':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
  });

  const addItemToCart = (item: ICartItem) => {
    dispatch({ type: 'addItem', payload: item });
  };

  const removeItemFromCart = (index: number) => {
    dispatch({ type: 'removeItem', payload: index });
  };


  const clearCart = () => {
    dispatch({ type: 'clearCart' });
  };

  const emptyCart = () => <p>Il carrello è vuoto</p>
  const showCart = () => {
    return (
      <ul>
        {state.items.map((item, index) => (
          <li key={item.id}>
            {item.name} - €{item.price.toFixed(2)}
            <button onClick={() => removeItemFromCart(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    );
};

  return (
    <div>
      <h2>Carrello della Spesa</h2>
      {state.items.length === 0 
        ? emptyCart()
        : showCart()
      }
      <h3>Totale: €{state.total.toFixed(2)}</h3>
      <button onClick={clearCart}>Svuota Carrello</button>
      <hr />
      <h3>Aggiungi un Articolo</h3>
      <button onClick={() => addItemToCart({ id: 1, name: 'Libro', price: 9.99 })}>
        Aggiungi Libro (€9.99)
      </button>
      <button onClick={() => addItemToCart({ id: 2, name: 'Penna', price: 1.49 })}>
        Aggiungi Penna (€1.49)
      </button>
    </div>
  );
};

export default ShoppingCart;

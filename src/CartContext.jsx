import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  id: 1,
  heading: "Fall Limited Edition Sneakers",
  currentPrice: 135,
  quantity: 1,
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Item/add": {
      const { id, heading, currentPrice, quantity } = state;
      const totalPrice = currentPrice * quantity;

      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex === -1) {
        const cartItem = {
          id,
          heading,
          currentPrice,
          quantity,
          totalPrice,
        };
        return {
          ...state,
          cart: [...state.cart, cartItem],
        };
      } else {
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                quantity: quantity,
                totalPrice: quantity * currentPrice,
              }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
        };
      }
    }

    case "Item/increaseQuantity": {
      return { ...state, quantity: state.quantity + 1 };
    }

    case "Item/decreaseQuantity": {
      return { ...state, quantity: Math.max(state.quantity - 1, 1) };
    }

    case "Item/delete": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== state.id),
      };
    }
    case "Cart/open": {
      return { ...state, isOpen: !state.isOpen };
    }

    default: {
      throw new Error("Unknown action type");
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };

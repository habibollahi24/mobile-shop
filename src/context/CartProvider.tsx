import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Product } from "../types";

type AddAction = {
  type: "ADD_TO_CART";
  payload: CartProductType;
};

type DecAction = {
  type: "DECREASE_CART";
  payload: CartProductType;
};

type Actions = AddAction | DecAction;

interface CartProductType extends Product {
  quantity?: number;
}

type ContextType = {
  state: {
    cart: CartProductType[];
  };
  dispatch: React.Dispatch<Actions>;
};

const CartContext = createContext<ContextType>({} as ContextType);

const initialState: { cart: CartProductType[] } = {
  cart: JSON.parse(localStorage.getItem("localCart")!) || [],
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productInCart = state.cart.find((p) => p.id === action.payload.id);
      if (productInCart) {
        productInCart.quantity = productInCart.quantity! + 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "DECREASE_CART": {
      const productInCart = state.cart.find((p) => p.id === action.payload.id)!;

      if (productInCart?.quantity === 1) {
        const removeInCart = state.cart.filter(
          (p) => p.id !== productInCart.id
        );
        return {
          ...state,
          cart: [...removeInCart],
        };
      }

      productInCart.quantity = productInCart.quantity! - 1;
      return {
        ...state,
        cart: [...state.cart],
      };
    }

    default:
      throw new Error("Invalid Actions");
  }
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export default CartProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useCart };

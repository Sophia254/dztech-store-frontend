import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const KEY = "dztech-cart";

function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: loadState(),
});

// Sauvegarde du panier dans le localStorage à chaque changement
store.subscribe(() => {
  try {
    localStorage.setItem(KEY, JSON.stringify({ cart: store.getState().cart }));
  } catch {
    /* stockage indisponible : on ignore */
  }
});

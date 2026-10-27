import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <span className="cart-emoji" aria-hidden="true">{item.emoji}</span>
      <div className="cart-info">
        <strong>{item.name}</strong>
        <span>{(item.price * item.quantity).toLocaleString("fr-DZ")} DA</span>
        <div className="qty">
          <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label="Diminuer la quantité">−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label="Augmenter la quantité">+</button>
        </div>
      </div>
      <button className="btn danger" onClick={() => dispatch(removeFromCart(item.id))}>
        Retirer
      </button>
    </li>
  );
}

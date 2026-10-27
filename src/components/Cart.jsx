import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems, selectCartTotal } from "../store/cartSlice";
import CartItem from "./CartItem";

export default function Cart({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}
      <aside className={"cart" + (open ? " open" : "")} aria-hidden={!open}>
        <div className="cart-head">
          <h2>Votre panier</h2>
          <button className="btn ghost" onClick={onClose}>Fermer</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">Votre panier est vide. Ajoutez un produit depuis le catalogue.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="cart-total">
              <span>Total</span>
              <strong>{total.toLocaleString("fr-DZ")} DA</strong>
            </div>
            <button className="btn danger full" onClick={() => dispatch(clearCart())}>
              Vider le panier
            </button>
          </>
        )}
      </aside>
    </>
  );
}

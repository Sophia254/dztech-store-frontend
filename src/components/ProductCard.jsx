import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../store/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch(); // envoi d'actions vers le store
  const items = useSelector(selectCartItems);
  const inCart = items.find((i) => i.id === product.id);

  return (
    <article className="card">
      <div className="card-img" aria-hidden="true">{product.emoji}</div>
      <p className="card-cat">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="card-desc">{product.description}</p>
      <div className="card-foot">
        <strong>{product.price.toLocaleString("fr-DZ")} DA</strong>
        <button className="btn primary" onClick={() => dispatch(addToCart(product))}>
          {inCart ? `Ajouter (${inCart.quantity})` : "Ajouter au panier"}
        </button>
      </div>
    </article>
  );
}

import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";

export default function Header({ dark, onToggleTheme, onOpenCart }) {
  const count = useSelector(selectCartCount); // lecture du state global

  return (
    <header className="header">
      <h1 className="logo">
        Dz<span>Tech</span> Store
      </h1>
      <div className="header-actions">
        <button className="btn ghost" onClick={onToggleTheme}>
          {dark ? "Mode clair" : "Mode sombre"}
        </button>
        <button className="btn primary" onClick={onOpenCart}>
          Panier <span className="badge">{count}</span>
        </button>
      </div>
    </header>
  );
}

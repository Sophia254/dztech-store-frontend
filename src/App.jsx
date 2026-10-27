import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./data/products";

export default function App() {
  // État LOCAL : uniquement utile à l'interface (pas partagé entre tout le monde)
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [cartOpen, setCartOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const categories = ["Tous", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter(
    (p) =>
      (category === "Tous" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app" data-theme={dark ? "dark" : "light"}>
      <Header
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
        onOpenCart={() => setCartOpen(true)}
      />
      <main className="container">
        <h2 className="title">Le meilleur de la tech, livré partout en Algérie</h2>
        <Filters
          search={search}
          onSearch={setSearch}
          categories={categories}
          category={category}
          onCategory={setCategory}
        />
        <ProductList products={filtered} />
      </main>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

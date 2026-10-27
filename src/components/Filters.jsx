export default function Filters({ search, onSearch, categories, category, onCategory }) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Rechercher un produit"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Rechercher un produit"
      />
      <div className="chips">
        {categories.map((c) => (
          <button
            key={c}
            className={"chip" + (c === category ? " active" : "")}
            onClick={() => onCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

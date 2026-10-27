import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (products.length === 0)
    return <p className="empty">Aucun produit trouvé. Essayez un autre mot-clé ou une autre catégorie.</p>;

  return (
    <section className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}

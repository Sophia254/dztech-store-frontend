# DzTech Store

- **Étudiant(e)** : _Votre nom ici_
- **Application** : DzTech Store, boutique en ligne d'électronique
- **Description** : catalogue de produits tech, recherche, filtre par catégorie et panier global géré avec Redux.

## Technologies utilisées
React 18, JSX, JavaScript ES6+, Redux Toolkit, React-Redux, Vite, Node.js / npm

## Composants React principaux
| Composant | Rôle |
|---|---|
| `App` | Composant racine, état local (recherche, catégorie, panier ouvert, thème) |
| `Header` | Logo, bouton thème, bouton panier avec compteur (lit Redux) |
| `Filters` | Barre de recherche et boutons de catégories (props) |
| `ProductList` / `ProductCard` | Affichage du catalogue, bouton « Ajouter » (dispatch) |
| `Cart` / `CartItem` | Panneau latéral du panier, quantités, retrait, total |

## État Redux
```js
state.cart = { items: [{ id, name, price, emoji, quantity }] }
```
- **Actions** : `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `clearCart`
- **Reducers** : définis dans `src/store/cartSlice.js` (`createSlice`)
- **Selectors** : `selectCartItems`, `selectCartCount`, `selectCartTotal`
- **Store** : `src/store/store.js` (`configureStore`), branché dans `main.jsx` via `<Provider>`

## Fonctionnalités
- Catalogue de 9 produits, ajout et retrait du panier
- Gestion des quantités (+ / −), total du panier, compteur dans l'en-tête
- Recherche et filtre par catégorie
- Mode sombre / clair
- Sauvegarde du panier dans le `localStorage`
- Interface responsive

## Lancer l'application
```bash
npm install
npm run dev
```
Puis ouvrir http://localhost:5173

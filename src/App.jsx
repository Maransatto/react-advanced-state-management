import React, { useContext } from "react";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

import CartContextProvider from "./store/shopping-cart-context.jsx";
import CatalogProvider, { CatalogContext } from "./store/catalog-context.jsx";

function App() {
  const { items } = useContext(CatalogContext);

  return (
    <>
      {/* <CartContextProvider>
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider> */}
      <CatalogProvider>
        catalog
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </CatalogProvider>
    </>
  );
}

export default App;

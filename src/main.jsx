import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./hooks/auth";
import { FavoritesProvider } from "./hooks/favorites";
import { CartProvider } from "./hooks/cart";
import { Routes } from "./routes";

import Layout from "./styles/layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <Layout>
            <Routes />
          </Layout>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

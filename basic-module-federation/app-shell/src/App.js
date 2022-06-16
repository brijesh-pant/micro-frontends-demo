import React from "react";
import { HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";

const BasketApp = React.lazy(() => import("basket/App"));
const ProductApp = React.lazy(() => import("product/App"));
const SignInApp = React.lazy(() => import("signin/App"));

const App = () => (
  <HashRouter>
    <div style={{ padding: "5px", border: "5px dotted green" }}>
      <h1>Base App</h1>
      <React.Suspense fallback="Loading Button">
        <Routes>
          <Route path="/basket" element={<BasketApp />} />
          <Route path="/product" element={<ProductApp />} />
          <Route path="/signin" element={<SignInApp />} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </React.Suspense>
    </div>
  </HashRouter>
);

export default App;

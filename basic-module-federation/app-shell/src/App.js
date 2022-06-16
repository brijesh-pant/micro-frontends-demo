import React from "react";

const RemoteButton = React.lazy(() => import("product/Button"));

const App = () => (
  <div style={{ padding: "5px", border: "5px dotted green" }}>
    <h1>Base App</h1>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;

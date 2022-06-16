import SignInPage from "./SignInPage";
import React from "react";
import { HashRouter } from "react-router-dom";

const App = ({ history }) => {
  console.log("🚀 ~ file: App.js ~ line 6 ~ App ~ history", history);
  return (
    <HashRouter history={history}>
      <SignInPage />
    </HashRouter>
  );
};

export default App;

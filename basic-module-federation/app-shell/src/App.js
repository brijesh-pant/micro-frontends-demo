import React from "react";
import { Box, Typography } from "@mui/material";
import { Switch, Route, Redirect } from "react-router-dom";
import ECommerceApp from "./ECommerceApp";

const SignInApp = React.lazy(() => import("signin/App"));

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token")) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Redirect to="/signin" replace />;
  }

  return children;
};

const App = () => (
  <Box
    style={{
      height: "100vh",
      padding: "5px",
      border: "5px dotted green",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Typography variant="h1" component="div" gutterBottom>
      Minimal ECommerce App
    </Typography>
    <React.Suspense fallback="Loading Button">
      <Switch>
        <Route path="/about">
          <div>
            <h2>About</h2>
          </div>
        </Route>
        <Route exact path="/">
          <RequireAuth>
            <ECommerceApp />
          </RequireAuth>
        </Route>
        <Route exact path="/signin">
          <SignInApp />
        </Route>
        <Route exact path="*" render={<Redirect to="/signin" replace />} />
      </Switch>
    </React.Suspense>
  </Box>
);

export default App;

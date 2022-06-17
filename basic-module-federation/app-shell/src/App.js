import React from "react";
import { Box, Typography } from "@mui/material";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import ECommerceApp from "./ECommerceApp";

const SignInApp = React.lazy(() => import("signin/App"));
const SignOutButton = React.lazy(() => import("signin/SignOutButton"));

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
  <HashRouter>
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
      <React.Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/">
            <RequireAuth>
              <>
                <Box
                  width="150px"
                  style={{ position: "absolute", top: "50px", right: "20px" }}
                >
                  <SignOutButton />
                </Box>
                <ECommerceApp />
              </>
            </RequireAuth>
          </Route>
          <Route exact path="/signin">
            <SignInApp />
          </Route>
          <Route exact path="*" render={<Redirect to="/signin" replace />} />
        </Switch>
      </React.Suspense>
    </Box>
  </HashRouter>
);

export default App;

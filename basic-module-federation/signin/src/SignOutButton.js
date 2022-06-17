import React from "react";
import { Button } from "@mui/material";
import { HashRouter, useHistory } from "react-router-dom";

const SignOutButton = () => {
  let history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };
  return (
    <Button
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      onClick={handleLogOut}
    >
      Sign out
    </Button>
  );
};

const SignOut = () => (
  <HashRouter>
    <SignOutButton />
  </HashRouter>
);

export default SignOut;

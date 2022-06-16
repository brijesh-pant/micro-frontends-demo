import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const SignInPage = () => {
  let history = useHistory();

  const handleLogin = () => {
    localStorage.setItem("token", "SAMPLE_TOKEN");
    history.push("/");
  };
  return (
    <Box
      style={{
        padding: "5px",
        border: "5px dotted blue",
        flex: "1",
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Sign in Micro App
      </Typography>
      <Stack spacing={3}>
        <TextField
          fullWidth
          type="email"
          label="Email address"
          defaultValue="aeiou@email.com"
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          defaultValue="12345"
        />
      </Stack>

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default SignInPage;

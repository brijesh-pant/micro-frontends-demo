import { HashRouter } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import React from "react";

const App = () => (
  <HashRouter>
    <Box
      style={{
        padding: "5px",
        border: "5px dotted red",
        flex: "1",
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Basket Micro App
      </Typography>
    </Box>
  </HashRouter>
);

export default App;

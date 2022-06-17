import { HashRouter } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import React from "react";

const App = ({ emitter }) => {
  const [count, setCount] = React.useState(0);
  if (emitter) {
    emitter.on("addToBasket", () => {
      setCount(count + 1);
    });
  }

  return (
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
        <Typography variant="h5" component="div" gutterBottom>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - {count}
        </Typography>
      </Box>
    </HashRouter>
  );
};

export default App;

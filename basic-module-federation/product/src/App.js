import { HashRouter } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import React from "react";

const ProductItem = ({ emitter }) => {
  const handleAddToBasket = () => {
    emitter.emit("addToBasket");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            B
          </Avatar>
        }
        title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      />
      <CardMedia
        component="img"
        height="350"
        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToBasket}>
          Add to Basket
        </Button>
      </CardActions>
    </Card>
  );
};

const ProductApp = (props) => {
  return (
    <Box
      style={{
        padding: "5px",
        border: "5px dotted blue",
        flex: "1",
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Product Micro App
      </Typography>
      <ProductItem {...props} />
    </Box>
  );
};

const App = (props) => {
  return (
    <HashRouter>
      <ProductApp {...props} />
    </HashRouter>
  );
};

export default App;

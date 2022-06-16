import React from "react";
import { Box } from "@mui/material";
const BasketApp = React.lazy(() => import("basket/App"));
const ProductApp = React.lazy(() => import("product/App"));

const ECommerceApp = () => (
  <Box>
    <BasketApp />
    <ProductApp />
  </Box>
);

export default ECommerceApp;

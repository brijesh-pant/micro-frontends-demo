import React from "react";
import { Box } from "@mui/material";
const BasketApp = React.lazy(() => import("basket/App"));
const ProductApp = React.lazy(() => import("product/App"));

import { createNanoEvents } from "nanoevents";

const emitter = createNanoEvents();

const ECommerceApp = () => {
  return (
    <Box>
      <BasketApp emitter={emitter} />
      <ProductApp emitter={emitter} />
    </Box>
  );
};

export default ECommerceApp;

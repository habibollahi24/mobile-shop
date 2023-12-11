import { CardActions, IconButton, Stack, Typography } from "@mui/material";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { useCart } from "../context/CartProvider";
import { Product } from "../types";

function ButtonsAction({
  product,
  direction = "row",
}: {
  product: Product;
  direction?: "row" | "row-reverse" | "column" | "column-reverse" | undefined;
}) {
  const { state, dispatch } = useCart();
  return (
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!state.cart.find((c) => c.id === product.id) ? (
        <IconButton
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          aria-label="add-to-cart"
          color="secondary"
        >
          <LocalMallRoundedIcon />
        </IconButton>
      ) : (
        <Stack
          direction={direction}
          spacing={1}
          alignItems="center"
          sx={{ bgcolor: "secondary.100", px: 1, borderRadius: "12px" }}
        >
          <IconButton
            onClick={() =>
              dispatch({ type: "DECREASE_CART", payload: product })
            }
            aria-label="decrese-cart"
            color="secondary"
          >
            {state.cart.find((c) => c.id === product.id)?.quantity === 1 ? (
              <DeleteIcon color="error" />
            ) : (
              <IndeterminateCheckBoxIcon />
            )}
          </IconButton>
          <Typography variant="h6" component="span">
            {state.cart.find((c) => c.id === product.id)?.quantity}
          </Typography>
          <IconButton
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            aria-label="add-to-cart"
            color="secondary"
          >
            <AddBoxIcon />
          </IconButton>
        </Stack>
      )}
    </CardActions>
  );
}

export default ButtonsAction;

import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box } from "@mui/material";
import { useCart } from "../context/CartProvider";

function AppLayout() {
  const { state } = useCart();

  return (
    <>
      <Box sx={{ pb: 10 }}>
        <Outlet />
      </Box>
      <Link to="/checkout">
        <footer className="footer">
          <Badge
            badgeContent={state.cart.reduce(
              (acc, cur) => acc + cur.quantity!,
              0
            )}
            color="secondary"
          >
            <ShoppingCartIcon color="secondary" sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </footer>
      </Link>
    </>
  );
}

export default AppLayout;

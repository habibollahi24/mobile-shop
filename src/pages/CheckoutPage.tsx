import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Button,
} from "@mui/material";
import { useCart } from "../context/CartProvider";
import ButtonsAction from "../components/ButtonsAction";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { state } = useCart();

  if (state.cart.length === 0)
    return (
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontWeight: "400",
          textAlign: "center",
          mt: 5,
        }}
      >
        Card Is Empty !!!
        <br />
        <Link to="/products">
          <Button variant="contained" color="secondary">
            Go To Products
          </Button>
        </Link>
      </Typography>
    );

  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: 5,
          zIndex: 100,
          bgcolor: "#fff",
          borderRadius: "15px",
          px: 2,
          py: 1,
        }}
        className="shadow-card"
      >
        <Link to="/products">
          <KeyboardBackspaceIcon
            sx={{ fontSize: "2.5rem", color: "secondary.500" }}
          />
        </Link>
        <Box
          sx={{
            width: "100%",
            mb: 2,
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontWeight: "400",
            }}
          >
            Total Price :{" "}
            {state.cart
              .reduce((acc, cur) => acc + cur.quantity! * cur.price, 0)
              .toFixed(2)}
            $
          </Typography>
        </Box>
      </Box>
      {state.cart.map((p) => {
        return (
          <Card
            key={p.id}
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              px: 2,
              mb: 2,
              boxShadow: 0,
              borderRadius: "15px",
            }}
            className="shadow-card"
          >
            <CardMedia
              component="img"
              sx={{ width: 80, p: 1, objectFit: "contain" }}
              image={p.image}
              alt={p.title}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{
                    whiteSpace: "nowrap",
                    fontWeight: "900",
                    color: "secondary.main",
                  }}
                >
                  {p.title.split(" ").slice(0, 3).join(" ")}
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary.500"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    fontWeight: "400",
                  }}
                >
                  {p.description}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontWeight: "400",
                  }}
                >
                  {p.price}$
                </Typography>
              </CardContent>
            </Box>

            <ButtonsAction product={p} direction="column-reverse" />
          </Card>
        );
      })}
    </Box>
  );
}

export default CheckoutPage;

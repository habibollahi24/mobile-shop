import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Product } from "../types";

import { Link } from "react-router-dom";

import ButtonsAction from "./ButtonsAction";

function ProductCard(product: Product) {
  const { title, id, image, price } = product;

  return (
    <Grid item xs={6} sx={{ textAlign: "center" }}>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "15px",
          boxShadow: 0,
        }}
        className="shadow-card"
      >
        <Link to={`/products/${id}`}>
          <CardActionArea sx={{ borderRadius: "0px" }}>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={title}
              sx={{ objectFit: "contain", p: 2 }}
            />
            <CardContent sx={{ p: "5px" }}>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                sx={{
                  whiteSpace: "nowrap",
                  fontWeight: "900",
                  color: "secondary.main",
                }}
              >
                {title.split(" ").slice(0, 3).join(" ")}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  fontWeight: "400",
                  px: 2,
                }}
              >
                {price}$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <ButtonsAction product={product} />
      </Card>
    </Grid>
  );
}

export default ProductCard;

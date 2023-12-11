import { Link, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import {
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SimilarProducts from "../components/SimilarProducts";
import { useEffect } from "react";
import ButtonsAction from "../components/ButtonsAction";
import { ProductLoader } from "../ui/Loading";
function ProductPage() {
  const { id } = useParams();
  const { isPending, product } = useProduct(id!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isPending) return <ProductLoader />;

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Link to="/products">
          <KeyboardBackspaceIcon
            sx={{ fontSize: "2.5rem", color: "secondary.500" }}
          />
        </Link>
        <Rating
          name="read-only"
          value={product.rating.rate}
          size="small"
          readOnly
        />
      </Stack>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt="green iguana"
        sx={{ objectFit: "contain", p: 2 }}
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Chip label={product.category} sx={{ px: 2, fontWeight: 700 }} />
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{
              fontWeight: "400",
              px: 2,
            }}
          >
            {product.price}$
          </Typography>
        </Stack>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 700 }}
        >
          {product.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ bgcolor: "secondary.100", borderRadius: "10px" }}
      >
        <ButtonsAction product={product} />
      </Stack>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{
          fontWeight: "400",
          px: 2,
          py: 4,
        }}
      >
        Similar Products
      </Typography>
      <SimilarProducts category={product.category} />
    </>
  );
}

export default ProductPage;

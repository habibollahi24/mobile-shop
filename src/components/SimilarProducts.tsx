import { Stack, Box, Typography, Rating } from "@mui/material";
import { useSimilarProduct } from "../hooks/useSimilarProduct";
import { Link } from "react-router-dom";
import { SimilarLoader } from "../ui/Loading";

type Props = {
  category: string;
};

function SimilarProducts({ category }: Props) {
  const { isPending, similarProduct } = useSimilarProduct(category);

  if (isPending) return <SimilarLoader />;

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          p: 4,
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          mb: 2,
        }}
      >
        {similarProduct.map((product) => {
          return (
            <Box
              key={product.id}
              sx={{
                p: 1,
                borderRadius: "5px",
                px: 3,
                cursor: "pointer",
                whiteSpace: "nowrap",
                width: "400",
              }}
              className="shadow-card"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  height="200"
                  width={200}
                  src={product.image}
                  alt="green iguana"
                  style={{ objectFit: "contain", padding: "1.5rem" }}
                />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontWeight: "400",
                  }}
                >
                  {product.price}$
                </Typography>
                <Rating
                  name="read-only"
                  value={product.rating.rate}
                  size="small"
                  readOnly
                />
              </Link>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default SimilarProducts;

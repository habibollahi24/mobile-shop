import { Grid } from "@mui/material";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { LoaderList } from "../ui/Loading";
import { useEffect, useState } from "react";
import { Product } from "../types";
import { filterProductBySearch, filterProductBycat } from "../helper";

type Props = {
  searchParams: URLSearchParams;
};

function ProductList({ searchParams }: Props) {
  const { isPending, products } = useProducts();
  const [displayedProduct, setDisplayProduct] = useState<Product[]>([]);

  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  useEffect(() => {
    setDisplayProduct(products);
  }, [products]);

  useEffect(() => {
    let finalFilter = filterProductBycat(products, categoryParam!);
    finalFilter = filterProductBySearch(finalFilter, searchParam!);
    setDisplayProduct(finalFilter);
  }, [categoryParam, products, searchParam]);

  if (isPending) return <LoaderList />;
  if (displayedProduct.length === 0) return <p>Not Match !!!</p>;

  return (
    <Grid container spacing={2}>
      {displayedProduct.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </Grid>
  );
}

export default ProductList;

import { Product } from "../types";

export const pareseQueryString = (queryString: string) => {
  const params = new URLSearchParams(queryString);
  const entries = params.entries();
  const queryParse = Object.fromEntries(entries);
  return queryParse;
};

export const filterProductBycat = (products: Product[], category: string) => {
  if (!category) return products;
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
};

export const filterProductBySearch = (products: Product[], search: string) => {
  if (!search) return products;
  if (search.trim() === "") return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(search.trim().toLowerCase())
  );
};

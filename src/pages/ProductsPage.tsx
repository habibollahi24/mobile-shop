import { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import ProductList from "../components/ProductList";
import SearchProducts from "../components/SearchProducts";
import FilterProducts from "../components/FilterProducts";

import { pareseQueryString } from "../helper";

function ProductsPage() {
  const { search: queryString } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const serachHandler = () => {
    const queryParse = pareseQueryString(queryString);

    if (search?.trim() === "") {
      delete queryParse.search;
      setSearchParams({ ...queryParse });
      return;
    }
    setSearchParams({ ...queryParse, search });
  };

  const categoryValueHandler = (value: string) => {
    setCategory(value);
    const queryParse = pareseQueryString(queryString);

    setSearchParams({ ...queryParse, category: value });
  };

  return (
    <>
      <SearchProducts
        search={search}
        setSearch={setSearch}
        serachHandler={serachHandler}
        searchParams={searchParams}
      />

      <FilterProducts
        categoryValueHandler={categoryValueHandler}
        category={category}
        searchParams={searchParams}
      />

      <ProductList searchParams={searchParams} />
    </>
  );
}

export default ProductsPage;

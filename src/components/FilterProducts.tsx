import { Box, Stack } from "@mui/material";

type Props = {
  category: string;
  searchParams: URLSearchParams;
  categoryValueHandler: (value: string) => void;
};

const categories = [
  { id: 1, title: "All", value: "all" },
  { id: 2, title: "Electronics", value: "electronics" },
  { id: 3, title: "Jewelery", value: "jewelery" },
  { id: 4, title: "Men's clothing", value: "men's clothing" },
  { id: 5, title: "Women's clothing", value: "women's clothing" },
];

function FilterProducts({ searchParams, categoryValueHandler }: Props) {
  const categoryParam = searchParams.get("category");

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          p: 2,
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          mb: 2,
        }}
      >
        {categories.map((cat) => {
          return (
            <Box
              key={cat.id}
              onClick={() => categoryValueHandler(cat.value)}
              sx={{
                bgcolor:
                  categoryParam === cat.value
                    ? "secondary.500"
                    : "secondary.100",
                color:
                  categoryParam === cat.value
                    ? "secondary.100"
                    : "secondary.500",
                p: 1,
                borderRadius: "5px",
                px: 3,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {cat.title}
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default FilterProducts;

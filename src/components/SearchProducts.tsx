import { Box, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchParams: URLSearchParams;
  serachHandler: () => void;
};

function SearchProducts({
  setSearch,
  search,
  serachHandler,
  searchParams,
}: Props) {
  const searchParam = searchParams.get("search");

  useEffect(() => {
    setSearch(searchParam || "");
  }, [searchParam, setSearch]);

  return (
    <Stack
      direction="row"
      sx={{
        border: "2px solid #6b7280",
        borderRadius: "15px",
        overflow: "hidden",
        mt: 1,
      }}
    >
      <input
        type="text"
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          paddingLeft: "1rem",
          fontSize: "1rem",
          color: "#555",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box
        sx={{
          bgcolor: "secondary.500",
          p: 1,
          display: "flex",
          alignContent: "center",
        }}
        onClick={serachHandler}
      >
        <SearchIcon sx={{ color: "secondary.100" }} />
      </Box>
    </Stack>
  );
}

export default SearchProducts;

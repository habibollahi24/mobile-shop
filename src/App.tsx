import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServerErrorPage from "./pages/ServerErrorPage";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100dvh",
        px: "0px",
        maxWidth: "450px",
        mx: "auto",
        p: 1,
        // border: "2px solid red",
      }}
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;

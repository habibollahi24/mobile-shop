import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import api from "../services/api";
import { Product } from "../types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [isPending, setIsPending] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get<Product>(`/products/${id}`);
        setProduct(data);
        setIsPending(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error);
          toast.error(error.message);
          navigate("/500");
        }
      } finally {
        setIsPending(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { product, isPending };
};

import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import api from "../services/api";
import { Product } from "../types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSimilarProduct = (category: string) => {
  const [similarProduct, setSimilarProduct] = useState<Product[]>([]);
  const [isPending, setIsPending] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get<Product[]>(
          `/products/category/${category}`
        );
        setSimilarProduct(data);
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
  }, []);

  return { similarProduct, isPending };
};

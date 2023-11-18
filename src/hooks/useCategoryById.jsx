import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";


const useCategoryById = (category_id) => {
  const [categoryById, setCategoryById] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryId = async () => {
      setLoading(true);
      try {
        const { status, data } = await axiosInstance.get(`videos/${category_id}`);

        if (status === 200) {
          setCategoryById(data);
          setLoading(false);
          setError("");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };

    fetchCategoryId();
  }, [category_id]);
  return {
    categoryById,
    loading,
    error,
  };
};
export default useCategoryById;

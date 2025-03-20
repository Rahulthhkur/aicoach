import { useState } from "react";
import { toast } from "react-hot-toast";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      
      if (!response) {
        throw new Error("No response from server");
      }

      return response; // ✅ Ensure function returns response
    } catch (error) {
      setError(error);
      toast.error(error.message || "Something went wrong");
      return undefined; // ✅ Explicitly return undefined in case of error
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;

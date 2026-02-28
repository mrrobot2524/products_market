import { useEffect } from "react";
import { useState } from "react";

export const useQuery = ({ deps = [], callback }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await callback();
        setData(res);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, deps);

  return { loading, error, data };
};

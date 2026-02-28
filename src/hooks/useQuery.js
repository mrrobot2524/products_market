import { useState } from "react";

export const useQuery = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
};

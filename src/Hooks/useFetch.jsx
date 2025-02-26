import React, { useEffect, useState } from "react"; // ✅ Correct order

const useFetch = (url) => { // Added URL parameter
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Proper dependency array

  return { loading, error, data };
};


export default useFetch;
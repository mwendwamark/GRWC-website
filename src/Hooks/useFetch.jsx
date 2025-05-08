import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url, { signal });
        
        if (!resp.ok) {
          throw new Error(`API error: ${resp.status} ${resp.statusText}`);
        }
        
        const json = await resp.json();
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err.message || 'An unknown error occurred');
          console.error('Fetch error:', err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to abort fetch on unmount or url change
    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
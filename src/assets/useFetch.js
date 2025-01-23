import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (urlWithCacheBuster, isMounted) => {
    setLoading(true);
    let allData = [];
    try {
      // Fetch the first page to get total pages
      const firstPageResponse = await axios.get(`${urlWithCacheBuster}&page=1`);
      allData = [...firstPageResponse.data];
      const totalPages = parseInt(
        firstPageResponse.headers["x-wp-totalpages"] || "1",
        10
      );

      // Fetch remaining pages in parallel
      const requests = [];
      for (let page = 2; page <= totalPages; page++) {
        requests.push(axios.get(`${urlWithCacheBuster}&page=${page}`));
      }

      const responses = await Promise.all(requests);
      responses.forEach((response) => {
        allData = [...allData, ...response.data];
      });

      if (isMounted()) {
        setData(allData);
      }
    } catch (err) {
      if (isMounted()) {
        setError(err);
      }
    } finally {
      if (isMounted()) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    let isMounted = true; // Ensure fetch only runs when component is mounted
    const urlWithCacheBuster = `${url}${url.includes("?") ? "&" : "?"}cacheBuster=${new Date().getTime()}`;

    fetchData(urlWithCacheBuster, () => isMounted);

    return () => {
      isMounted = false; // Cleanup on component unmount
    };
  }, [url]);

  const refetch = () => {
    const urlWithCacheBuster = `${url}${url.includes("?") ? "&" : "?"}cacheBuster=${new Date().getTime()}`;
    fetchData(urlWithCacheBuster, () => true); // Pass always-true for manual refetch
  };

  return { data, loading, error, refetch };
}

export default useFetch;

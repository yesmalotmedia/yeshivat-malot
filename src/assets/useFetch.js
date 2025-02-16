// import { useEffect, useState } from "react";
// import axios from "axios";

// function useFetch(url) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async (urlWithCacheBuster, isMounted) => {
//     setLoading(true);
//     let allData = [];
//     try {
//       // Fetch the first page to get total pages
//       const firstPageResponse = await axios.get(`${urlWithCacheBuster}&page=1`);
//       allData = [...firstPageResponse.data];
//       const totalPages = parseInt(
//         firstPageResponse.headers["x-wp-totalpages"] || "1",
//         10
//       );
//       // Fetch remaining pages in parallel
//       const requests = [];
//       for (let page = 2; page <= totalPages; page++) {
//         requests.push(axios.get(`${urlWithCacheBuster}&page=${page}`));
//       }

//       const responses = await Promise.all(requests);
//       responses.forEach((response) => {
//         allData = [...allData, ...response.data];
//       });

//       if (isMounted()) {
//         setData(allData);
//       }
//     } catch (err) {
//       if (isMounted()) {
//         setError(err);
//       }
//     } finally {
//       if (isMounted()) {
//         setLoading(false);
//       }
//     }
//   };

//   useEffect(() => {
//     let isMounted = true; // Ensure fetch only runs when component is mounted
//     const urlWithCacheBuster = `${url}${url.includes("?") ? "&" : "?"}cacheBuster=${new Date().getTime()}`;

//     fetchData(urlWithCacheBuster, () => isMounted);

//     return () => {
//       isMounted = false; // Cleanup on component unmount
//     };
//   }, [url]);

//   const refetch = () => {
//     const urlWithCacheBuster = `${url}${url.includes("?") ? "&" : "?"}cacheBuster=${new Date().getTime()}`;
//     fetchData(urlWithCacheBuster, () => true); // Pass always-true for manual refetch
//   };

//   return { data, loading, error, refetch };
// }

// export default useFetch;
import { useState, useEffect } from "react";

const useFetch = (baseUrl, perPage = 10) => {
  const [data, setData] = useState([]); // שמירת כל הנתונים שכבר נטענו
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // ניהול מספר העמוד
  const [hasMore, setHasMore] = useState(true); // בדיקה אם יש עוד נתונים

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${baseUrl}?per_page=${perPage}&page=${page}`
        );
        const newData = await response.json();

        if (response.ok) {
          setData((prevData) => [...prevData, ...newData]); // מצרף את הנתונים הקודמים לחדשים
          setHasMore(newData.length === perPage); // אם יש פחות מ-perPage, נגמרו הנתונים
        } else {
          throw new Error(newData.message || "שגיאה בטעינת הנתונים");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, perPage, page]); // רץ מחדש רק כש-page משתנה

  // פונקציה לטעינת עמוד נוסף
  const loadMore = () => {
    if (hasMore) setPage((prevPage) => prevPage + 1);
  };

  return { data, loading, error, loadMore, hasMore };
};

export default useFetch;

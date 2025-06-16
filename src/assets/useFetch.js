import { useState, useEffect } from "react";

const useFetch = (baseUrl, perPage = 100, limit = 300) => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstLoadComplete, setFirstLoadComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      let allResults = [];
      let page = 1;
      let totalPages = 1;

      try {
        while (allResults.length < limit && page <= totalPages) {
          const url = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}per_page=${perPage}&page=${page}`;
          console.log(`📡 Fetching page ${page}: ${url}`);

          const response = await fetch(url);

          // טיפול בשגיאה 500
          if (response.status === 500) {
            console.warn(`⚠️ Server returned 500 (Internal Error) on page ${page}. Stopping.`);
            break;
          }

          if (!response.ok) {
            throw new Error(`שגיאה בטעינה: ${response.status} ${response.statusText}`);
          }

          const newData = await response.json();
          console.log(`📥 Page ${page} returned ${newData.length} items`);

          allResults = [...allResults, ...newData];

          if (page === 1) {
            const totalPagesHeader = response.headers.get("X-WP-TotalPages");
            totalPages = totalPagesHeader ? parseInt(totalPagesHeader) : Infinity;
            console.log("📄 Total pages (from header or fallback):", totalPages);
          }

          // עצירה אם פחות מהכמות הנדרשת חזרה
          if (newData.length < perPage) {
            console.log("⛔ קיבלנו פחות מה-perPage – סביר שאין עוד עמודים.");
            break;
          }

          page++;
        }

        console.log("✅ סיום איסוף. מספר פריטים בסה״כ:", allResults.length);
        setAllData(allResults);
        setData(allResults.slice(0, perPage));
        setFirstLoadComplete(true);
      } catch (err) {
        console.error("❌ שגיאה:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, perPage, limit]);

  return { data, allData, loading, error, firstLoadComplete };
};

export default useFetch;

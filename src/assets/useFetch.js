import { useState, useEffect } from "react";

const useFetch = (baseUrl, perPage = 100, limit = 300) => {
  const [data, setData] = useState([]); // הנתונים הראשוניים שמוצגים
  const [allData, setAllData] = useState([]); // כל הנתונים
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstLoadComplete, setFirstLoadComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      let allResults = [];
      let page = 1;
      let totalPages = 1; // נניח שיש לפחות עמוד אחד

      try {
        while (allResults.length < limit && page <= totalPages) {
          const response = await fetch(
            `${baseUrl}&per_page=${perPage}&page=${page}`
          );
          if (!response.ok) throw new Error("שגיאה בטעינת הנתונים");

          const newData = await response.json();
          allResults = [...allResults, ...newData];

          // עדכון מספר העמודים על בסיס הכותרת של ה-API
          if (page === 1) {
            totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 1;
          }

          // אם הבאנו פחות מהצפוי, כנראה שאין יותר נתונים
          if (newData.length < perPage) break;

          page++;
        }

        setAllData(allResults); // שמירת כל הנתונים
        setData(allResults.slice(0, perPage)); // שמירת הנתונים הראשונים
        setFirstLoadComplete(true);
      } catch (err) {
        setError(err.message);
        console.error("שגיאה בטעינת הנתונים: ", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, perPage, limit]);

  return { data, allData, loading, error, firstLoadComplete };
};

export default useFetch;

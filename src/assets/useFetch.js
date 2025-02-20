import { useState, useEffect } from "react";

const useFetch = (baseUrl, perPage = 100, limit = null) => {
  const [data, setData] = useState([]); // כל הנתונים
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      let allData = [];
      let page = 1;
      let totalPages = 1;
      let fetchedCount = 0; // סופר כמה פריטים נטענו

      try {
        while (page <= totalPages) {
          const response = await fetch(
            `${baseUrl}&per_page=${perPage}&page=${page}`
          );

          if (!response.ok) throw new Error("שגיאה בטעינת הנתונים");

          const newData = await response.json();

          // בדיקה אם צריך לעצור בגלל ה-limit
          if (limit !== null && fetchedCount + newData.length > limit) {
            const remaining = limit - fetchedCount;
            allData = [...allData, ...newData.slice(0, remaining)];
            break; // לא טוען יותר עמודים
          }

          allData = [...allData, ...newData];
          fetchedCount = allData.length; // עדכון הספירה

          totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 1;
          page++;
        }

        setData(allData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [baseUrl, perPage, limit]);

  return { data, loading, error };
};

export default useFetch;

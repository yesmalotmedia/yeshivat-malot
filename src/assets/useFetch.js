import { useState, useEffect } from "react";

const useFetch = (baseUrl, perPage = 20) => {
  const [data, setData] = useState([]); // נתונים שמוצגים למשתמש
  const [allData, setAllData] = useState([]); // כל הנתונים המלאים ברקע
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstTwentyLoaded, setFirstTwentyLoaded] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      setError(null);

      try {
        // 1. טוען 20 ראשונים
        const response = await fetch(`${baseUrl}&per_page=20&page=1`);
        if (!response.ok) throw new Error("שגיאה בטעינת הנתונים");

        const initialData = await response.json();
        setData(initialData);
        setFirstTwentyLoaded(true); // סימון שה-20 הראשונים נטענו

        // 2. ברקע - טוען את כל הנתונים
        fetchAllData();
      } catch (err) {
        setError(err.message);
        console.error("שגיאה בטעינת הנתונים הראשוניים: ", err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllData = async () => {
      let allResults = [];
      let page = 2; // התחל מעמוד 2 כי עמוד 1 כבר נטען
      let totalPages = 0; // התחל עם totalPages = 0 כדי שהלולאה תפסיק אם אין מידע על עמודים

      try {
        while (page <= totalPages || totalPages === 0) {
          // תמשיך אם totalPages = 0
          const response = await fetch(`${baseUrl}&per_page=100&page=${page}`);
          if (!response.ok) throw new Error("שגיאה בטעינת הנתונים");

          const newData = await response.json();

          allResults = [...allResults, ...newData];

          // עדכון totalPages לפי הכותרת
          totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 0;

          page++;
        }

        setAllData((prev) => [...prev, ...allResults]); // שמירת כל הנתונים
      } catch (err) {}
    };

    fetchInitialData();
  }, [baseUrl]);

  return { data, allData, loading, error, firstTwentyLoaded };
};

export default useFetch;

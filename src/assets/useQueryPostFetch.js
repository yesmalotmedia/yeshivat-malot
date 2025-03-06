import { useInfiniteQuery } from "@tanstack/react-query";

const useQueryPostFetch = (baseUrl, search = "") => {
  const fetchData = async ({ pageParam = 1 }) => {
    if (!baseUrl) return [];

    const searchParam = search ? `&search=${encodeURIComponent(search)}` : "";
    // const url = `${baseUrl}?page=${pageParam}&per_page=100&orderby=date&order=desc${searchParam}`;
    const url = `${baseUrl}?page=${pageParam}&per_page=100&orderby=date&order=desc`;

    const res = await fetch(url);
    return res.json();
  };

  const { data, status, error, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ["lessons", search], // מעדכן את הנתונים כאשר החיפוש משתנה
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length + 1 : undefined,
  });

  return { data, status, error, fetchNextPage, refetch };
};

export default useQueryPostFetch;

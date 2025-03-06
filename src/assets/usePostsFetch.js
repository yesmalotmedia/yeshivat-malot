import { useInfiniteQuery } from "@tanstack/react-query";

const usePostsFetch = (baseUrl, categoryParam, searchQuery) => {
  const fetchData = async ({ pageParam = 1 }) => {
    let fetchUrl = "";
    if (!searchQuery) {
      fetchUrl =
        categoryParam && categoryParam != "-1"
          ? `${baseUrl}?page=${pageParam}&per_page=20&orderby=date&order=desc&categories=${categoryParam}`
          : `${baseUrl}?page=${pageParam}&per_page=20&orderby=date&order=desc`;
      console.log("category serch");
    } else {
      fetchUrl = `${baseUrl}?page=${pageParam}&per_page=20&orderby=date&order=desc&search=${searchQuery}`;
      console.log("query serch", searchQuery);
    }

    const res = await fetch(fetchUrl);
    return res.json();
  };

  const { data, status, error, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ["lessons", categoryParam], // הוספת categoryParam
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });

  return { data, status, error, fetchNextPage, refetch };
};

export default usePostsFetch;

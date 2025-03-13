import { useInfiniteQuery } from "@tanstack/react-query";
import useDebounce from "../Hooks/useDebounce";

const usePostsFetch = (categoryParam, searchQuery) => {
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const fetchData = async ({ pageParam = 1, signal }) => {
    let fetchUrl;

    if (debouncedSearchQuery) {
      fetchUrl = `https://yesmalot.co.il/wp-json/custom/v1/search?s=${debouncedSearchQuery}&page=${pageParam}&per_page=20&orderby=date&order=desc`;
    } else {
      fetchUrl = `https://yesmalot.co.il/wp-json/custom/v1/search?category=${categoryParam}&page=${pageParam}&per_page=20&orderby=date&order=desc`;
    }

    const res = await fetch(fetchUrl, { signal });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  };

  const { data, status, error, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ["lessons", categoryParam, debouncedSearchQuery],
    queryFn: ({ pageParam }) => {
      const controller = new AbortController();
      return fetchData({ pageParam, signal: controller.signal });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    staleTime: 0,
    cacheTime: 0,
  });

  return { data, status, error, fetchNextPage, refetch };
};

export default usePostsFetch;

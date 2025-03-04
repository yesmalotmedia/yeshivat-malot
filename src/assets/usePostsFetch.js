import { useInfiniteQuery } from "@tanstack/react-query";

const usePostsFetch = (baseUrl) => {
  console.log("fetch");
  const fetchData = async ({ pageParam }) => {
    const res = await fetch(
      `${baseUrl}page=${pageParam}&per_page=20&orderby=date&order=desc`
    );
    return res.json();
  };

  const { data, status, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["lessons"],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
  return { data, status, error, fetchNextPage };
};

export default usePostsFetch;

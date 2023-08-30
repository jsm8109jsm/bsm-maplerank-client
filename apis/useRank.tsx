import { instance } from "@/utils/instance";
import axios from "axios";
import { useMemo } from "react";
import { useQuery } from "react-query";

type SortByType = "LEVEL" | "MULENG";

export const RANK_QUERY_KEY = (sortBy: SortByType) => ["rank", sortBy];

const getRank = async (sortBy: SortByType) => {
  return (await instance.get(`rank`, { params: { sortBy } })).data;
};

const useRank = (sortBy: SortByType) => {
  const getCommentByIdQuery = useQuery(
    RANK_QUERY_KEY(sortBy!),
    () => getRank(sortBy),
    {
      retry: false,
    }
  );

  const ranking = useMemo(
    () => getCommentByIdQuery.data,
    [getCommentByIdQuery.data]
  );

  return {
    ranking,
  };
};

export default useRank;

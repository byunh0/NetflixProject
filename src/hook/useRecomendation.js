
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// fetchRecomendation 함수 정의
const fetchRecomendation = ({id}) => {
  return api.get(`/movie/${id}/recommendations`);
}

// useRecomendation 훅 정의
export const useRecomendation = ({id}) => {
  return useQuery({
    queryKey: ["recomendation", {id}],
    queryFn: () => fetchRecomendation({id}),
    select: (result)=>result?.data,
  });
}
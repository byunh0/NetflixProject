import {useQuery} from "@tanstack/react-query";
import api from "../utils/api"
const fetchPopularMovies =async () => {
    try {
        const response = await api.get('/movie/popular');
        console.log(response.data); // API 응답 데이터를 로그로 확인
        return response.data;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
}
export const usePopularMoviesQuery=()=>{
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select:(result)=>result.data,
    })
}
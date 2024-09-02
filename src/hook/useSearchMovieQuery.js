import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchSearchMovie=({keyword,page})=>{
    return keyword? api.get(`/search/movie?query=${keyword}&page=${page}`) : api.get(`/movie/popular?page=${page}`)
}
export const useSearchMovieQuery=({keyword,page})=>{

    return useQuery({
        queryKey:['movie-search',{keyword,page}],//키워드에 따라 항상 url이름이 달라져야함.
        queryFn:()=>fetchSearchMovie({keyword,page}),
        select:(result)=>result.data,
    })
}
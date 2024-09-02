import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchSearchMovie=({keyword})=>{
    return keyword? api.get(`/search/movie?query=${keyword}`) : api.get('/movie/popular')
}
export const useSearchMovieQuery=({keyword})=>{

    return useQuery({
        queryKey:['movie-search',keyword],//키워드에 따라 항상 url이름이 달라져야함.
        queryFn:()=>fetchSearchMovie({keyword}),
        select:(result)=>result.data,
    })
}
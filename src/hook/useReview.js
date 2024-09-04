import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchreview=({id})=>{
    return api.get(`/movie/${id}/reviews`)
}
export const useReview=({id})=>{
return useQuery({
    queryKey:['movieReview',{id}],
    queryFn: ()=> fetchreview({id}),
    select:(result)=>result?.data,
})
}
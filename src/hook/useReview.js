import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchreview=({id})=>{
    return api.get(`/movie/${id}/reviews`)
}
export const useReview=({id})=>{
useQuery({
    queryKey:['movieReview',{id}],
    queryFn: ()=> fetchreview({id}),
})
}
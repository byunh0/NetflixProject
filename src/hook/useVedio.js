import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"
const fetchMovieVideo=(vedioId)=>{
    return api.get(`/movie/${vedioId}/videos`)
}
export const useVedio=(vedioId)=>{
   
return useQuery({
    queryKey:['movieVideo',vedioId],
    queryFn:()=>fetchMovieVideo(vedioId),
})
}
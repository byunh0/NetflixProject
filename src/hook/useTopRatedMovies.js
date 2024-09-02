import React from 'react'
import api from '../utils/api'
import { useQuery } from '@tanstack/react-query'
const  fetchUseTopRatedMovies=async()=>{
    return await api.get('/movie/top_rated')
}

export const useTopRatedMovies=()=>{
    return useQuery({
        queryKey:['Top-Rated-Movie'],
        queryFn: fetchUseTopRatedMovies,
        select:(result)=>result.data,
    })
}
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../utils/api'

export const useUpcomingMovies = () => {
    const fetchUpcomingMovie=async()=>[
        await api.get('/movie/upcoming')
    ]
  return (
    useQuery({
        querykey:['UPcomingMovies'],
        queryFn: fetchUpcomingMovie,
        
    })
  )
}


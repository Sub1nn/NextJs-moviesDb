"use client"

import React, { useEffect, useState } from "react"
import Card from "./components/Card"

interface Movie {
  orginal_title: string
  release_data: Date
  vote_average: any
  overview: string
}

const Page: React.FC = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
        if (!res.ok) {
          throw new Error("HTTP error! status: " + res.status)
        }
        const data = await res.json() // Await the promise to get the actual data
        setMovies(data.results)
      } catch (error) {
        console.error("Error fetching data", error)
      }
    }
    fetchMoviesData()
  }, [])

  return (
    <>
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </>
  )
}

export default Page

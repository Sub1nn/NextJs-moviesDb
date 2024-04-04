"use client"

import React, { useEffect, useState } from "react"
import Card from "./components/Card"

const Page = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
        // ? can do the same with axios as follows
        // try {
        //   const response = await axios.get(
        //     "https://api.themoviedb.org/3/movie/popular",
        //     {
        //       params: {
        //         api_key: "4e44d9029b1270a757cddc766a1bcb63",
        //         language: "en-US",
        //       },
        //     }
        //   );
        // const data = response.data.results;
        // setMovies(data);
        if (!res.ok) {
          throw new Error("HTTP error! status: " + res.status)
        }
        const data = await res.json() // Await the promise to get the actual data
        setMovies(data.results)
        console.log(data)
      } catch (error) {
        console.error("Error fetching data", error)
      }
    }
    fetchMoviesData()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  )
}

export default Page

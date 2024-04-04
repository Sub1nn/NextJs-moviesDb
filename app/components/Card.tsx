/* eslint-disable @next/next/no-img-element */
import React from "react"

interface Movie {
  original_title: string
  release_date: Date
  vote_average: string
  overview: string
  poster_path: string
}

interface cardProps {
  movie: Movie
}

const Card: React.FC<cardProps> = ({ movie }) => {
  const slicedOverview = movie.overview.slice(0, 100) + "..."
  const releaseDate = new Date(movie.release_date).toLocaleDateString()

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-200 hover:scale-110 ">
      <img
        className="w-full h-80 object-cover"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{movie.original_title}</div>
        <p className="text-gray-700 text-base">{slicedOverview}</p>
        <p className="text-gray-600 text-sm my-2 font-bold">
          Release Date: {releaseDate}
        </p>
        <p className="text-gray-600 text-sm font-bold">
          Vote Average: {movie.vote_average}
        </p>
      </div>
    </div>
  )
}

export default Card

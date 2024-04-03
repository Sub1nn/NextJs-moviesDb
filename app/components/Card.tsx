import React from "react"

interface Movie {
  orginal_title: string
  release_data: Date
  vote_average: any
  overview: string
}

interface cardProps {
  movie: Movie
}

const Card: React.FC<cardProps> = ({ movie }) => {
  return (
    <div>
      <h1>{movie.orginal_title}</h1>
      <p>{movie.overview}</p>
    </div>
  )
}

export default Card

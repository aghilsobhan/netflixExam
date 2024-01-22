import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  console.log(movie)
  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded">
      <Link to={`/movie/${movie?.name} `} className="w-full">
        <img
          src={`/images/${movie?.image}`}
          alt={movie?.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="px-4 py-3 absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white">
        <h3 className="font-semibold truncate">
          {movie?.name}
          <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
            <FaHeart />
          </button>
        </h3>
      </div>
    </div>
  );
}

export default Movie;

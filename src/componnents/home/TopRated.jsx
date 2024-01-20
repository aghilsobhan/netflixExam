import React, { useState } from "react";
import Titles from "../Titles";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Movies } from "../../Data/MovieData";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Stars";
function TopRated(props) {
  const [nextE1, setNextE1] = useState(null);
  const [prevE1, setPrevE1] = useState(null);
  const classNames =
    "hover:bg-dry transition text-sm rounded w-8 h-8 flex-colo bg-subMain text-white ";
  return (
    <div className="m-16">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{nextE1,prevE1}}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border-border bg-dry rounded-lg overflow-hidden ">
                <img
                  src={`/images/${movie.image}`}
                  alt={movie.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className=" hoveres px-4 gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-10 h-10 flex-colo transition hover:bg-subMain rounded-full bg-white bg-opacity-20 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    className="font-semibold text-lg trancuted line-clamp-2 text-white "
                    to={`/movie/${movie.name} `}
                  >
                    {movie.name}
                  </Link>
                  <div className=" flex gap-2 text-yellow-400">
                    <Rating value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" w-full px-1 justify-center flex gap-4 pt-12 ">
          <button className= {classNames} ref={(node) => setPrevE1("1")}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextE1("2")}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRated;

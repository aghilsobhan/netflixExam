import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";

function WatchPage(props) {
  const { id } = useParams();
  const movie = Movies.find((m) => m.name === id);
  const [play, setPlay] = useState(false);
  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
      <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movie/${movie.name}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack />
            {movie?.name}
          </Link>
          <div className="flex  justify-between items-center sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transition bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
            <button className="bg-subMain flex flex-row justify-center items-center gap-2 transition  text-white rounded px-8 py-3 font-medium text-sm">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>
        {/**Watch views */}
        {
          play ?(<video controls autoPlay={play} className="w-full h-full rounded">
            <source src="/images/movies/1.mp4" type="video/mp4" title={movie?.name}>

            </source>
          </video>):(
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
              <button onClick={()=>setPlay(true)} className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl ">
                <FaPlay/>
              </button>
            </div>
            <img src={movie?.image?`/images/${movie.image}`:"images/user.png"} alt=""  className="w-full h-full object-cover rounded-lg"/>
          </div>
          )
        }
      </div>
    </Layout>
  );
}

export default WatchPage;

import React, { useState } from "react";
import Layout from "../layout/Layout";
import Filters from "../componnents/Filters";
import Movie from"../componnents/Movie";
import {Movies} from "../Data/MovieData"
import { CgSpinner } from "react-icons/cg";

function MoviesPage(props) {
  const maxpage=3;
  const [page,setPage]=useState(maxpage);
  const HandleLoadingMore=()=>{
    setPage(page+maxpage);
  }

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters/>
        <p className="text-lg text-white font-medium my-6">
          Total <span className="font-bold text-subMain">{Movies.length}</span> item Movies

        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {
            Movies.slice(0,page).map((item,index)=>(
              <Movie key={index} movie={item}></Movie>
            ))
          }

        </div>
{/*Loading More */}
<div className="w-full flex-colo md:my-20 my-10">
  <button onClick={HandleLoadingMore} className="flex items-center gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain">
Loding More <CgSpinner className="animate-spin"/>
  </button>

</div>
      </div>
    </Layout>
  );
}

export default MoviesPage;

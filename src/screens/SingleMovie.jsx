import React from "react";
import { useParams } from "react-router-dom";
import {Movies} from '../Data/MovieData'
import Layout from '../layout/Layout';
import MovieInfo from '../componnents/single/MovieInfo'
import MovieCarts from "../componnents/single/MovieCarts";
import MovieRates from "../componnents/single/MovieRates";
import Titles from "../componnents/Titles";
import Movie from "../componnents/Movie";
import { BsCollectionFill } from "react-icons/bs";
function SingleMovie(props) {
  const {id}=useParams();
  console.log(id)
  const movie=Movies.find((movie)=>movie.name==id);
  const RelativeMovie=Movies.filter((m)=>m.category===movie.category);

  return(
   
    <Layout>
   
      <MovieInfo movie={movie}/>
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCarts movie={movie}/>
        <MovieRates movie={movie}/>
        <div className="my-16">
          <Titles title="Relative Movies" Icon={BsCollectionFill}/>
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-6 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {
            RelativeMovie.map((item,index)=>(
              <Movie key={index} movie={item}></Movie>
            ))
          }
</div>
        </div>
      </div>
    </Layout>
    )
}

export default SingleMovie;

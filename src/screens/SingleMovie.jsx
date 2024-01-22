import React from "react";
import { useParams } from "react-router-dom";
import {Movies} from '../Data/MovieData'
import Layout from '../layout/Layout';
import MovieInfo from '../componnents/single/MovieInfo'
function SingleMovie(props) {
  const {id}=useParams();
  console.log(id)
  const movie=Movies.find((movie)=>movie.name==id);

  return(
   
    <Layout>
   
      <MovieInfo movie={movie}/>
      <div className="container mx-auto min-h-screen px-2 my-6"></div>
    </Layout>
    )
}

export default SingleMovie;

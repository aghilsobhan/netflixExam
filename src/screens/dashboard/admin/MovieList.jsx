import React from "react";
import SideBar from "../SideBar";
import Table from "../../../componnents/Table";
import { Movies } from "../../../Data/MovieData";

function MovieList(props) {
  return   (  <SideBar>
  <div className="flex flex-col gap-6">
    <div className="flex-btn gap-2">
      <h2 className="text-xl font-bold">Favorites Movies</h2>
      <button className="font-medium bg-main transition hover:bg-subMain border border-subMain text-white py-2 my-2 px-5 rounded w-full sm:w-auto">
        MovieList
      </button>
    </div>
  </div>
  <Table data={Movies} admin={false}/>
</SideBar>
);
}

export default MovieList;

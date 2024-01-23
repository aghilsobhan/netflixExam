import React, { useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "../UsedInput";
import Rating from "../Stars";

function MovieRates({ movie }) {
  const Ratings = [
    {
      title: "0 - Poor",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 1,
    },
    {
      title: "2 - Good",
      value: 2,
    },
    {
      title: "3 - VeryGood",
      value: 3,
    },
    {
      title: "4 - Exellent",
      value: 4,
    },
    {
      title: "5 - MasterPiece",
      value: 5,
    },
  ];
  const [rating, setRating] = useState();
  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 0x-2 sm:p-20 rounded">
        {/**write review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-text font-semibold ">
            Review {movie?.name}
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            Write Review for this movie.it Will be Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptas, quod.
          </p>
          <div className="text-sm w-full">
            <Select
              lable="Select Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <div className="flex mt-4 text-lg gap-2 text-yellow-500">
              <Rating value={rating} />
            </div>
          </div>
          <Message lable="Message" placeholder="Make it Short and sweet..." />
          <button className="bg-subMain text-white py-3 w-full flex-colo rounded">
            Submit

          </button>
        </div>
        
      </div>
    </div>
  );
}

export default MovieRates;

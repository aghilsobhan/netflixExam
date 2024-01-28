import React from "react";
import { Link } from "react-router-dom";
import {BiHomeAlt} from "react-icons/bi";
function NotFound(props) {
  return( <div className="flex flex-col justify-center items-center w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6 ">
    <img className="w-full h-96 object-contain"
     src="/images/notfound.svg"
    
    alt="" />
<h1 className="lg:text-4xl font-bold">Page Not Found</h1>
<p className="font-medium leading-6 m-4 text-white italic" >
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, laborum.
  adipisicing elit. Itaque, laborum
</p>
<Link to="/" className="bg-subMain transition hover:text-main m-4 flex flex-row justify-center items-center gap-4 text-white font-medium py-3 px-4 rounded-md">
<BiHomeAlt/> Back Home
</Link>
  </div>);
}

export default NotFound;

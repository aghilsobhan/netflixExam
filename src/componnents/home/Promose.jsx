import React from "react";
import { FiUser } from "react-icons/fi";
function Promose() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry ">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="text-white xl:text-3xl text-xl capitalize font-medium font-sans xl:leading-relaxed ">
            download your Movie & Whatch offline <br /> Enjoy on your Mobile
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat, quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat, quibusdam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat, quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quaerat, quibusdam.
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
              HD 4k
            </div>
            <div className="flex items-center gap-4  bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser />2k
            </div>
          </div>
        </div>
        <div>
            <img src="/images/mobail.png" alt="mobile" className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Promose;

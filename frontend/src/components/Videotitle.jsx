import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
function Videotitle() {
  return (
    <div className=" w-screen aspect-video absolute gap-56 text-white pt-[18%] ">
      <h1 className="text-3xl font-sans font-bold">movie name</h1>
      <p className="w-1/3">
        Welcome to Netflix! 🎬 Discover the latest movies, top-rated
        blockbusters, and personalized recommendations just for you. Enjoy your
        binge-watching! 🍿
      </p>
      <div className="mt-8 flex gap-2">
        <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 flex items-center">
          <FaPlayCircle />
          <span>play</span>
        </button>
        <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 flex items-center">
          <MdInfoOutline />
          <span>watch more</span>
        </button>
      </div>
    </div>
  );
}

export default Videotitle;

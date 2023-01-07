import React from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Popover className="relative bg-black">
      <div className="mx-auto  px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                alt=""
              />
            </a>
          </div>
          <Link
            to="/movies/popular"
            className="text-xl font-medium text-white hover:text-gray-400"
          >
            Popular
          </Link>
          <Link
            to="/movies/top_rated"
            className="text-xl font-medium text-white hover:text-gray-400"
          >
            Top Rated
          </Link>{" "}
          <Link
            to="/movies/upcoming"
            className="text-xl font-medium text-white hover:text-gray-400"
          >
            Upcoming
          </Link>{" "}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              to="/about-me"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </Popover>
  );
}

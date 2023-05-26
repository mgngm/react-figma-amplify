
import React from "react";
import features from '../constants/index';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Home() {

  function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  };


  return (
    <div className="flex flex-col items-center gap-8 w-full relative pt-24">
      <div className="flex flex-col gap-10 sm:gap-14 items-center">
        <div className="md:text-center px-2 w-80 sm:w-fit">
          <h2 className="text-5xl font-bold text-yellow-400">Explore Features</h2>
          <h2 className="text-2xl pt-4">Launch a Feature</h2>
        </div>
        <div className="flex pt-10 flex-col md:flex-row lg:gap-0 gap-4 items-center">

          <div className="grid grid-cols-3 gap-4">
            {
              features.map(feat => (
                <div
                  key={feat.id}
                  className="max-h-60 w-80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 bg-gray-900 z-10">

                  <h2 className="text-2xl font-bold">{feat.name}</h2>
                  <p className="">{truncate(feat.description, 80)}</p>

                  <Link to={feat.url} className="bottom-1 left-1 inline-flex items-center w-auto px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300">
                      Explore Now <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />
                  </Link>
                </div>
              ))
            }
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home
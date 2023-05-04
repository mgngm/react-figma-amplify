
import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center gap-8 w-full relative pt-24">
      <div className="flex flex-col gap-10 sm:gap-14 items-center">
        <div className="md:text-center px-2 w-80 sm:w-fit">
          <h2 className="text-5xl font-bold text-purple-med dark:text-yellow">Work, Sleep, Relax</h2>
          <h2 className="text-2xl pt-4 dark:text-white">Soundy supercharges your days and nights</h2>
        </div>
        <div className="flex pt-10 flex-col md:flex-row lg:gap-0 gap-4 items-center">
          <div className="flex flex-col items-center gap-4">
            <div
              className="h-56 w-80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 bg-gray-900 dark:text-white z-10">

              <h2 className="text-2xl font-bold text-purple-lt dark:text-yellow">Unlimited play</h2>
              <p className="">Sounds are played indefinitely so you don't waste your time replaying it</p>
            </div>
            <div
              className="h-56 w-80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 bg-gray-900 dark:text-white z-10">

              <h2 className="text-2xl font-bold text-purple-lt dark:text-yellow">20+ sounds</h2>
              <p>Listen to 22 high-quality sounds that reproduce different ambiances</p>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 597" fill="none"
            className="absolute left-1/2 z-auto transform -translate-x-1/2 top-80 md:-bottom-20 md:top-auto max-w-lg hidden sm:flex">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M272.172 0.618405C347.718 1.77225 417.884 27.693 477.41 74.2248C547.049 128.662 635.4 191.311 628.884 279.462C622.44 366.632 514.686 398.603 449.155 456.445C390.87 507.891 349.268 584.32 272.172 594.32C187.979 605.241 97.4938 573.824 42.4327 509.202C-9.91998 447.759 0.582625 360.116 3.89675 279.462C7.0133 203.617 7.93824 122.561 60.5678 67.8582C113.911 12.4139 195.243 -0.556567 272.172 0.618405Z"
              fill="url(#paint0_linear_90_21001)"></path>
            <defs>
              <linearGradient id="paint0_linear_90_21001" x1="315" y1="-9.5" x2="315" y2="650"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F4791"></stop>
                <stop offset="0.0001" stopColor="#4F4791"></stop>
                <stop offset="1" stopColor="#FACA45"></stop>
              </linearGradient>
            </defs>
          </svg>

          <img src="https://soundy.cloud/assets/rocket.png" alt="" className="h-fit hidden lg:flex z-10 w-64" />

          <div className="flex flex-col gap-4 items-center">
            <div
              className="h-56 w-80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 bg-gray-900 dark:text-white z-10">
              <h2 className="text-2xl font-bold text-purple-lt dark:text-yellow">Control your time</h2>
              <p>Plan simply your sessions of sleep, work, or meditation with a timer</p>
            </div>
            <div
              className="h-56 w-80 rounded-2xl shadow-lg p-6 flex flex-col gap-3 bg-gray-900 dark:text-white z-10">
              <h2 className="text-2xl font-bold text-purple-lt dark:text-yellow">Perfect environment</h2>
              <p>Background sounds will help you mask external noise, reduce stress, and relax</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
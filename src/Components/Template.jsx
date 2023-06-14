import React from 'react'

function Template() {
  return (
        <div className="flex flex-col items-center gap-8 w-full relative pt-24">
            <div className="flex flex-col gap-10 sm:gap-14 items-center">
                <div className="md:text-center px-2 w-80 sm:w-fit">
                    <h2 className="text-5xl font-bold text-purple-med dark:text-yellow">Template</h2>
                    <h2 className="text-1xl pt-4 dark:text-white">Template description</h2>
                </div>


                <div className="flex flex-col gap-4 items-center">
                   {/* Main conentent here */}
                </div>
            </div>
        </div>
    )
}

export default Template
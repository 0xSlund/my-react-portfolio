import React from "react";

const catalog = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#ffffff] text-black">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-[100%]">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 ">
            Catalog
          </p>
          <p className="py-6">
            Come Explore Our Content.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-12 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
           
            <p className="my-4">Articles</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
           
            <p className="my-4">Courses</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            
            <p className="my-4">Podcasts</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
           
            <p className="my-4">Videos</p>
          </div>
        
        </div>
        <div>
     
      </div>
        </div>
      </div>    

  );
};

export default catalog;

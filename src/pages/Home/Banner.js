import React from "react";

const Banner = () => {
 return (
  <div className="hero mb-12 pt-10 sm:mb-14 sm:pt-14">
   <div className="hero-content flex-col lg:flex-row-reverse p-1 sm:p-4 mb-4 sm:mb-0">
    <img
     src="https://i.ibb.co/jW4vFqn/banner.png"
     className="sm:max-w md:w-1/2 rounded-lg shadow-2xl"
     alt=""
    />
    <div className="text-gray-900">
     <h1 className="text-5xl font-bold leading-tight text-primary">
      Integrations keep feedback on track
     </h1>
     <p className="py-6 text-gray-600 font-semibold mr-5">
      Anonymous feedback by AppCoderz. New feature request? <br />
      Ping the product team automatically. It's easy to build a workflow
      <br /> that works for you.
     </p>
     <label 
      htmlFor="pin-form-modal"
      onClick={()=>{
      }}
      className="btn btn-primary px-8 border-0 text-lg font-bold text-secondary 
      hover:bg-black hover:text-white">Give feedback</label>
    </div>
   </div>
  </div>
 );
};

export default Banner;

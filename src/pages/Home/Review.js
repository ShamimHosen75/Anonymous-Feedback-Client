import React, { useEffect, useState } from "react";
import Loading from "../shared/Loading/Loading";

const Review = () => {
 const [reviews, setReviews] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  setLoading(true);
  fetch("http://localhost:5000/reviews")
   .then((res) => res.json())
   .then((data) => {
    setReviews(data);
    setLoading(false);
   });
 }, []);

 return loading ? (
  <Loading loadingStatus="true"></Loading>
 ) : (
  <div className="mx-4 sm:mx-10 mb-24">
   <h2 className="text-4xl text-center font-bold text-primary mb-14 mt-10">
    All Feedback
   </h2>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {reviews
     .slice(-6)
     .reverse()
     .map((rev) => (
      <div key={rev._id} className="card bg-base-100 shadow-xl">
       <div className="card-body text-primary">
        <div className="flex mt-6">
         {/* <div className="ml-4">
          <h5 className="text-xl text-bold">{rev.name}</h5>
          <p>{rev.Address}</p>
         </div> */}
         <p className="inline text-md font-semibold text-black">
          <span className="text-xl font-bold">Review : </span>  
          {rev.feedback?.slice(0, 200)}</p>
        </div>
        
       </div>
      </div>
     ))}
   </div>
  </div>
 );
};

export default Review;

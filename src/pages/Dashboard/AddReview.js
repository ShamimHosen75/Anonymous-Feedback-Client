import React from "react";
import { toast } from "react-toastify";

const AddReview = () => {
 const handleReviewAdd = (e) => {
  e.preventDefault();
  const feedback = e.target.feedback.value;
  const newReview = { feedback };

  fetch("https://anonymous-feedback-system.vercel.app/reviews", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(newReview),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.success) {
     toast.success(` Review Added`);
     e.target.reset();
    } else {
     toast.error(`Please again fill the form`);
    }
   });
 };

 return (
  <div className="ml-5 text-center">
   <h2 className="text-3xl text-primary my-7 font-medium">Add New Feedback</h2>
   <div className="flex items-center justify-center">
   <div className="sm:w-1/2 text-center items-center bg-gray-200 p-10 sm:p-5 rounded-md mr-5">
    <form onSubmit={handleReviewAdd}>
     <div className=" justify-center form-control mt-3">
      <label className="label">
       <h4 className="label-text text-lg font-bold">Feedback</h4>
      </label>
      <textarea
       name="feedback"
       className="textarea"
       placeholder="Enter your feedback..."
      ></textarea>
     </div>
     
     <div className="form-control mt-6">
      <input
       className="btn btn-primary text-white"
       type="submit"
       value="Submit"
      />
     </div>
    </form>
   </div>
   </div>
  </div>
 );
};

export default AddReview;

import React from "react";
import { toast } from "react-toastify";

const AddReview = () => {
 const handleReviewAdd = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const Address = e.target.address.value;
  const description = e.target.description.value;
  const newReview = { name, Address, description };

  fetch("http://localhost:5000/reviews", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(newReview),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.success) {
     toast.success(`${name} Review Added`);
     e.target.reset();
    } else {
     toast.error(`${name} Please again fill the form`);
    }
   });
 };

 return (
  <div className="ml-5 text-center">
   <h2 className="text-3xl my-7 font-medium">Add New Review</h2>
   <div className="flex items-center justify-center">
   <div className="sm:w-1/2 text-center items-center bg-gray-200 p-10 sm:p-5 rounded-md mr-5">
    <form onSubmit={handleReviewAdd}>
     <div className=" justify-center form-control mt-3">
      <label className="label">
       <h4 className="label-text text-lg font-bold">Add Review</h4>
      </label>
      <textarea
       name="description"
       className="textarea"
       placeholder="Enter your feedback"
      ></textarea>
     </div>
     
     <div className="form-control mt-6">
      <input
       className="btn btn-secondary text-white"
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

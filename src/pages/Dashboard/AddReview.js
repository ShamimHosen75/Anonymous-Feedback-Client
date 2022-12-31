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
  <div className="ml-5 ">
   <h2 className="text-3xl my-3 font-medium">Add a Review</h2>
   <div className="sm:w-1/2 bg-gray-200 p-10 sm:p-5 rounded-md mr-5">
    <form onSubmit={handleReviewAdd}>
     <div className="sm:flex justify-between">
      {/* <div className="form-control">
       <label className="label">
        <span className="label-text">Name</span>
       </label>
       <input
        type="text"
        name="name"
        placeholder="Name"
        className="input input-bordered sm:w-56"
        required
       />
      </div> */}

      {/* <div className="form-control">
       <label className="label">
        <span className="label-text">Address</span>
       </label>
       <input
        type="text"
        name="address"
        placeholder="address"
        className="input input-bordered sm:w-56"
        required
       />
      </div> */}
     </div>
     
     <div className="form-control mt-3">
      <label className="label">
       <h4 className="label-text text-lg font-bold">Add Review</h4>
      </label>
      <textarea
       name="description"
       className="textarea"
       placeholder="Enter your feedback"
      ></textarea>
     </div>

     <div className="sm:flex justify-between mt-3">
      <div className="form-control">
       <label className="label">
        <span className="label-text text-lg font-bold">Ratings</span>
       </label>
       <input
        type="number"
        name="rating"
        max="5"
        min="1"
        placeholder="Rating 1 out of 5"
        className="input input-bordered sm:w-96"
        required
       />
      </div>
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
 );
};

export default AddReview;

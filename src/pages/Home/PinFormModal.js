import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const PinFormModal = () => {
  const [pin, setPin] = useState('');
  const navigate = useNavigate();
  const adminPin = '1234';


  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(pin === adminPin){
      toast.success(`Successfully!`);
      navigate("/addReview");
    } else{
      toast.error(`Incorrect PIN, please try again.`);
      setPin('');
    }
  };


 return (
    <div>
     <input type="checkbox" id="pin-form-modal" className="modal-toggle" />
      <div className="modal">
       <div className="modal-box relative">
       <label htmlFor="pin-form-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <form className='text-center' onSubmit={handleSubmit}>
         <label htmlFor="password" className="label text-center justify-center">
           <span className="label-text text-xl font-semibold">PIN CODE</span>
         </label>

       <input 
         className="input input-bordered w-60 border-gray-400" 
         type="password" 
         placeholder="Enter Your Pin Code"
         value={pin} 
         onChange={handlePinChange} />
       <div className="modal-action form-control mt-5 justify-center items-center">
         <button
          type="submit"
          value="Submit"
          htmlFor="pin-form-modal"
          className="btn btn-primary text-white w-32 font-bold border-0">Submit</button>
        </div>
       </form>
      </div>
      </div>
    </div>
 );
};

export default PinFormModal;

import React, { useEffect, useState } from "react";

const PinFormModal = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  // let location = useLocation();


  useEffect(() => {
    // code to show pop-up form on website visit
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('/http://localhost:5000//password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin })
    })
      .then((response) => {
        if (response.ok) {
         // redirect to review page on success
        } else {
          setError('Invalid pin code');
        }
      })
      .catch((error) => {
        setError('Error occurred while checking pin code');
      });
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
         onChange={(e) => setPin(e.target.value)} />
         {error && <div className="error">{error}</div>}
       <div className="modal-action form-control mt-5 justify-center items-center">
         <label
          type="submit"
          value="Submit"
          htmlFor="pin-form-modal"
          className="btn btn-primary text-white w-32 font-bold border-0">Submit</label>
        </div>
       </form>
      </div>
      </div>
    </div>
 );
};

export default PinFormModal;

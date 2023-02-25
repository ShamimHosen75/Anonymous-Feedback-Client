import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function PinForm() {
  const [pin, setPin] = useState('');
  const [redirectToReview, setRedirectToReview] = useState(false);
  const adminPin = '123456'; // Replace with your own admin PIN

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (pin === adminPin) {
      setRedirectToReview(true);
    } else {
      alert('Incorrect PIN, please try again.');
      setPin('');
    }
  };


  if (redirectToReview) {
    return <Redirect to="/addReview" />;
  };

  return (
    <div className="card-body py-5">
       <form className='text-center' onSubmit={handleSubmit}>
       <label htmlFor="email" className="label text-center justify-center">
        <span className="label-text text-xl font-semibold">PIN CODE</span>
       </label>
       <input 
        className="input input-bordered w-60 border-gray-400" 
        type="password" 
        placeholder="Enter Your Pin Code"
        value={pin} 
        onChange={handlePinChange} />
       {/* {error && <div className="error">{error}</div>} */}
       <div className="form-control mt-5 justify-center items-center">
         <button
          type="submit"
          value="Submit"
          className="btn btn-primary text-white w-32 font-bold border-0"
         >Submit</button>
        </div>
     </form>
    </div>
  );
}
export default PinForm;

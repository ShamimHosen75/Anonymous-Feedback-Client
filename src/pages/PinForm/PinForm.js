// import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AddReview from '../Dashboard/AddReview';

// function PinForm() {
//   const [pin, setPin] = useState('');
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const adminPin = '123456'; // Replace with your own admin PIN

//   const handlePinChange = (event) => {
//     setPin(event.target.value);
//   };


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (pin === adminPin) {
//       setIsAuthorized(true);
//     } else {
//       alert('Incorrect PIN, please try again.');
//       setPin('');
//     }
//   };


//   return (
//     <div className="card-body py-5">
//       {isAuthorized ? (
//         <Route path="/addReview" element={<AddReview />} />
//       ) : (
//         <Routes 
//         path="/"
//         element={
//         <form className='text-center' onSubmit={handleSubmit}>
//        <label htmlFor="email" className="label text-center justify-center">
//         <span className="label-text text-xl font-semibold">PIN CODE</span>
//        </label>
//        <input 
//         className="input input-bordered w-60 border-gray-400" 
//         type="password" 
//         placeholder="Enter Your Pin Code"
//         value={pin} 
//         onChange={handlePinChange} />
//        <div className="form-control mt-5 justify-center items-center">
//          <button
//           type="submit"
//           value="Submit"
//           className="btn btn-primary text-white w-32 font-bold border-0"
//          >Submit</button>
//         </div>
//       </form>
//         }
//        />
//       )}
       
//     </div>
//   );
// }
// export default PinForm;

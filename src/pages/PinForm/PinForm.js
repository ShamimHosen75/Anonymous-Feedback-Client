// import { useEffect, useState } from 'react';

// function PinForm(props) {
//   const [pin, setPin] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // code to show pop-up form on website visit
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     fetch('/api/check-pin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ pin })
//     })
//       .then((response) => {
//         if (response.ok) {
//          // redirect to review page on success
//         } else {
//           setError('Invalid pin code');
//         }
//       })
//       .catch((error) => {
//         setError('Error occurred while checking pin code');
//       });
//   };

//   return (
//     <div className="card-body py-5">
//        <form className='text-center' onSubmit={handleSubmit}>
//        <label htmlFor="email" className="label text-center justify-center">
//         <span className="label-text text-xl font-semibold">PIN CODE</span>
//        </label>
//        <input 
//         className="input input-bordered w-60 border-gray-400" 
//         type="text" 
//         placeholder="Enter Your Pin Code"
//         value={pin} 
//         onChange={(e) => setPin(e.target.value)} />
//        {error && <div className="error">{error}</div>}
//        <div className="form-control mt-5 justify-center items-center">
//          <label
//           type="submit"
//           value="Submit"
//           className="btn btn-primary text-white w-32 font-bold border-0"
//          >Submit</label>
//         </div>
//      </form>
//     </div>
//   );
// }
// export default PinForm;

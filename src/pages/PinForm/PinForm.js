import { useEffect, useState } from 'react';

function PinForm(props) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // code to show pop-up form on website visit
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('/api/check-pin', {
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
    <div className="card-body py-5">
      <h4 className="text-3xl text-black text-center font-bold">Pin Code Form</h4>
       <form onSubmit={handleSubmit}>
       <label>
         Enter your 4 digit pin:
        <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} />
       </label>
       {error && <div className="error">{error}</div>}
       <div className="form-control mt-5">
         <input
          type="submit"
          value="Submit"
          className="btn btn-primary text-white w-32  font-bold border-0"
         ></input>
        </div>
     </form>
    </div>
  );
}
export default PinForm;

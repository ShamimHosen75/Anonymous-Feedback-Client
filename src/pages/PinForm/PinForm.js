import React, { useState } from 'react';

const PinForm = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.length !== 4) {
      setError('PIN must be exactly 4 digits');
    } else {
      // Do something with the PIN, like sending it to the backend for validation
      console.log(pin);
      setPin('');
    }
  };

  return (
    <div className="card-body py-5">
      <h4 className="text-3xl text-black text-center font-bold">Pin Code Form</h4>
      <form onSubmit={handleSubmit}>
      <label htmlFor="password" className="label">
          <span className="label-text">Pin Code</span>
      </label>
      <input
        type="text"
        name="pin"
        value={pin}
        placeholder="Enter your pin"
        onChange={(e) => setPin(e.target.value)}
        min="0"
        max="9999"
        required
        className="input input-bordered input-lg w-full max-w-xs"
      />
      {error && <p>{error}</p>}
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
};

export default PinForm;

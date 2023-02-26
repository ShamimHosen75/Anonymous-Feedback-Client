import React from 'react';
import PinFormModal from './PinFormModal';

const UserFeedback = () => {
  return (
    <div className='text-center justify-center py-5'>
      <h2 className='text-3xl font-bold items-center py-5'>Do You Want to give feedback?</h2>
      <label 
      htmlFor="pin-form-modal"
      onClick={()=>{
      }}
      className="btn btn-primary px-10 border-0 text-lg font-bold text-secondary 
      hover:bg-black hover:text-white">Yes</label>
      <PinFormModal></PinFormModal>
    </div>
  );
};

export default UserFeedback;
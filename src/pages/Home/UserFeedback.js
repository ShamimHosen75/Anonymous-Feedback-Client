import React from 'react';
import PinFormModal from './PinFormModal';

const UserFeedback = () => {
  return (
    <div className='text-center justify-center py-5'>
      <h2 className='text-3xl font-bold items-center py-5'>Do You Want to FeedBack?</h2>
      <label 
      htmlFor="pin-from-modal"
      onClick={()=>{
        <PinFormModal></PinFormModal>
      }}
      className="btn btn-primary px-10 border-0 text-lg font-bold text-secondary 
      hover:bg-black hover:text-white">Yes</label>
    </div>
  );
};

export default UserFeedback;
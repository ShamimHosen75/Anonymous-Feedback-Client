import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <div className='notFound-wrapper text-primary'>
                  <h1 className='text-center text-4xl font-bold pt-9 pb-5'>Oops!</h1>
                  <h4 className='text-center text-8xl font-bold'>404</h4>
                    <div className='flex justify-center items-center py-20'>
                    <button className='btn btn-primary  px-10 border-0 text-lg font-bold text-secondary hover:bg-black hover:text-white' onClick={() => navigate("/home")}>GO TO HOMEPAGE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
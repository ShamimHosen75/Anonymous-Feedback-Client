import React from 'react';

const Banner = () => {
    return (
        <div className="hero mb-12 pt-10 sm:mb-14 sm:pt-14">
            <div className="hero-content flex-col lg:flex-row-reverse p-1 sm:p-4 mb-4 sm:mb-0">
                <img src="https://i.ibb.co/jW4vFqn/banner.png" className="sm:max-w md:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='text-gray-900'>
                    <h1 className="text-5xl font-bold leading-tight text-secondary">Integrations keep feedback on track</h1>
                    <p className="py-6 text-secondary mr-5">Anonymous feedback by AppCoderz. New feature request? Ping the product team automatically. It's easy to build a workflow that works for you.</p>
                    <button type="button" className="btn btn-primary px-8 border-0 font-bold text-secondary">
                        Give feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
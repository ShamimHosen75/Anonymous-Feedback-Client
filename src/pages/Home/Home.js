import React from 'react';
import Footer from "../shared/Footer";
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    return (
        <>
            <div className='px-4 sm:px-12'>
                <Banner></Banner>
                <Review></Review>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
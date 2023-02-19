import React from 'react';
import RequireAdmin from '../Login/RequireAdmin';
import PinForm from '../PinForm/PinForm';
import Footer from "../shared/Footer";
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    return (
        <>
            <div className='px-4 sm:px-12'>
                <Banner></Banner>
                <PinForm></PinForm>
                <RequireAdmin><Review></Review></RequireAdmin>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
import React from 'react';
import Footer from "../shared/Footer";
import Banner from './Banner';
import PinFormModal from './PinFormModal';
import UserFeedback from './UserFeedback';

const Home = () => {
    return (
        <>
            <div className='px-4 sm:px-12'>
                <Banner></Banner>
                <UserFeedback></UserFeedback>
                <PinFormModal></PinFormModal>
                {/* <AllFeedback></AllFeedback> */}
                {/* <RequireAdmin><Review></Review></RequireAdmin> */}
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
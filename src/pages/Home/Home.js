import React from 'react';
import RequireAdmin from '../Login/RequireAdmin';
import PinForm from '../PinForm/PinForm';
import Footer from "../shared/Footer";
import Banner from './Banner';
import PinFormModal from './PinFormModal';
import Review from './Review';
import UserFeedback from './UserFeedback';

const Home = () => {
    return (
        <>
            <div className='px-4 sm:px-12'>
                <Banner></Banner>
                <UserFeedback></UserFeedback>
                <PinFormModal></PinFormModal>
                <PinForm></PinForm>
                <RequireAdmin><Review></Review></RequireAdmin>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
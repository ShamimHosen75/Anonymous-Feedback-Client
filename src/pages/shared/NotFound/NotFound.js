import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='notFound-container'>
                <div className='notFound-wrapper'>
                    <h1>Opps!</h1>
                    <h5>404-PAGE NOT FOUND</h5>
                    <p>The page you are looking for might have been removed <br /> had its's name change or is temporarily unavailable.</p>
                    <button onClick={() => navigate("/home")}>GO TO HOMEPAGE</button>
                </div>
            </div>
        </>
    );
};

export default NotFound;
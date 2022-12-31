import React, { useState } from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

    const [email,setEmail] = useState("");
    
    const handleNewsLater = (e) => {
        e.preventDefault();
        setEmail("");
    }

    return (
        <footer className="bg-primary text-secondary text-center sm:text-left px-10 sm:px-20">
            <div className="container py-5">
                <div className="grid sm:grid-cols-12 gap-10 py-4">
                    <div className="sm:col-start-1 sm:col-end-5 mb-4 mb-lg-0">
                        <h3 className='text-3xl font-semibold mb-4'>Anonymous Feedback</h3>
                        <p className="font-italic text-gray-900 font-semibold">Anonymous Feedback is with it's user-friendly interface, we've seen responses to surveys and feedback improve drastically?</p>
                    </div>
                    <div className="sm:col-start-5 sm:col-end-7 mb-4 mb-lg-0">
                        <h6 className="uppercase font-medium mb-4">Shop</h6>
                        <ul className="list-unstyled mb-0 text-gray-900 font-semibold">
                            <li className="mb-2  ">Our Achievement</li>
                            <li className="mb-2 ">Our Story</li>
                            <li className="mb-2 ">Feedback</li>
                            <li className="mb-2 ">Our Blog</li>
                        </ul>
                    </div>
                    <div className="sm:col-start-7 sm:col-end-9 mb-4 mb-lg-0">
                        <h6 className="uppercase font-medium mb-4">Company</h6>
                        <ul className="list-unstyled mb-0 text-gray-900 font semibold">
                            <li className="mb-2 ">Login</li>
                            <li className="mb-2 ">Register</li>
                            <li className="mb-2 ">Our Feedback</li>
                            <li className="mb-2 ">Summary</li>
                        </ul>
                    </div>
                    <div className="sm:col-start-9 sm:col-end-13 mb-lg-0">
                        <h6 className="uppercase font-medium mb-4">Newsletter</h6>
                        <p className='mb-4 text-gray-900'>Be the first to know about exciting our feedback.</p>
                        <form onSubmit={handleNewsLater}>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" class="input w-60 max-w-xs text-gray-900 font-medium " />
                            <input className='btn bg-black text-[#f3ec78]  
                             hover:bg-black hover:text-white  ml-2' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="container text-center">
                    <p className="mb-0 py-2 text-secondary font-semibold">Copyright 
                      © {year} | App Coderz | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
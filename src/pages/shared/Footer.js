import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
 const year = new Date().getFullYear();

 const [email, setEmail] = useState("");

//  const refresh = () => window.location.reload(true);

 const handleNewsLater = (e) => {
  e.preventDefault();
  setEmail("");
 };


 return (
  <footer className="bg-primary text-secondary text-center sm:text-left px-10 sm:px-20">
   <div className="container py-5">
    <div className="grid sm:grid-cols-12 gap-10 py-4">
     <div className="sm:col-start-1 sm:col-end-5 mb-4 mb-lg-0">
     <Link to="/home" className="btn btn-ghost normal-case text-2xl font-bold px-0">
      App Coderz
     </Link>
      <p className="font-italic text-[#bcbcb6] font-semibold mt-4">
       App Coderz is with it's user-friendly interface, we've seen
       responses to surveys and feedback improve drastically?
      </p>
     </div>
     <div className="sm:col-start-5 sm:col-end-7 mb-4 mb-lg-0">
      <h6 className="uppercase font-medium mb-4">Shop</h6>
      <ul className="list-unstyled mb-0 text-[#bcbcb6] font-semibold">
       <li className="mb-2  ">Our Achievement</li>
       <li className="mb-2 ">Our Story</li>
       <li className="mb-2 ">Feedback</li>
       <li className="mb-2 ">Our Blog</li>
      </ul>
     </div>
     <div className="sm:col-start-7 sm:col-end-9 mb-4 mb-lg-0">
      <h6 className="uppercase font-medium mb-4">Company</h6>
      <ul className="list-unstyled mb-0 text-[#bcbcb6] font-semibold">
      <Link to="/login" className="mb-2">Login</Link>
       <br/>
      <Link to="/signUp" className="mb-2">Sign UP</Link>
       <li className="mb-2 ">Our Feedback</li>
       <li className="mb-2 ">Summary</li>
      </ul>
     </div>
     <div className="sm:col-start-9 sm:col-end-13 mb-lg-0">
      <h6 className="uppercase font-medium mb-4">Newsletter</h6>
      <p className="mb-4 text-[#bcbcb6]">
       Be the first to know about exciting our feedback.
      </p>
      <form onSubmit={handleNewsLater}>
       <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        class="input w-60 max-w-xs text-gray-900 font-medium "
       />
       <input
        className="btn bg-secondary text-primary
        hover:bg-black hover:text-white ml-2"
        type="submit"
        value="Submit"
       />
      </form>
     </div>
    </div>
   </div>

   <div className="py-3">
    <div className="container text-center">
     <p className="mb-0 py-2 text-secondary font-semibold">
      Copyright © {year} |<a href="https://appcoderz.com/" target="_blank" rel="noreferrer"> App Coderz </a>| All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;

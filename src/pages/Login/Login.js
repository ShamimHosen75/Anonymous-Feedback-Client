import React, { useEffect } from "react";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleImage from "../../assets/google.png";
import auth from "../../firebase.init";
import useToken from "../Hooks/useToken";
import Footer from "../shared/Footer";
import Loading from "../shared/Loading/Loading";

const Login = () => {
 const {
  register,
  getValues,
  formState: { errors },
  handleSubmit,
 } = useForm();
 const [signInWithGoogle, googleUser, googleLoading, googleError] =
  useSignInWithGoogle(auth);
 const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
 const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
 const [token] = useToken(user || googleUser);

 let errorElement;
 const navigate = useNavigate();
 const location = useLocation();
 let from = location.state?.from?.pathname || "/";

 useEffect(() => {
  if (token) {
   navigate(from, { replace: true });
  }
 }, [from, navigate, token]);

 if (googleError || error) {
  errorElement = <p className="w-60 text-red-500">{error.message || googleError.message}</p>
 }

 const onSubmit = (data) => {
  signInWithEmailAndPassword(data.email, data.password);
 };

 if (googleLoading || loading) {
  return <Loading loadingStatus="true"></Loading>;
 }

 return (
  <>
   <div className="hero text-gray-900">
    <div className="hero-content p-0 sm:p-10">
     <div
      style={{ boxShadow: "0 3px 8px rgb(0 0 0 / 24%)" }}
      className="card flex-shrink-0 w-full max-w-sm bg-base-100"
     >
      <div className="card-body py-5">
       <h4 className="text-3xl text-center text-primary font-bold">Login</h4>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
         <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
         </label>
         <input
          id="email"
          type="email"
          placeholder="email"
          className="input input-bordered w-60 border-gray-400"
          {...register("email", {
           required: {
            value: true,
            message: "Email is required",
           },
           pattern: {
            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: "Provide a valid email",
           },
          })}
         />
         <label className="label">
          {errors.email?.type === "required" && (
           <span className="label-text-alt text-red-500">
            {errors.email.message}
           </span>
          )}
          {errors.email?.type === "pattern" && (
           <span className="label-text-alt text-red-500">
            {errors.email.message}
           </span>
          )}
         </label>
        </div>
        <div className="form-control">
         <label htmlFor="password" className="label">
          <span className="label-text ">Password</span>
         </label>
         <input
          id="password"
          type="password"
          placeholder="password"
          className="input input-bordered w-60 border-gray-400"
          {...register("password", {
           required: {
            value: true,
            message: "Password is required",
           },
           minLength: {
            value: 6,
            message: "Password minimum 6 Character",
           },
          })}
         />
         <label className="label">
          {errors.password?.type === "required" && (
           <span className="label-text-alt text-red-500">
            {errors.password.message}
           </span>
          )}
          {errors.password?.type === "minLength" && (
           <span className="label-text-alt text-red-500">
            {errors.password.message}
           </span>
          )}
         </label>
         <p
          onClick={async () => {
           const email = getValues("email");
           await sendPasswordResetEmail(email);
          }}
          className="label-text-alt link link-hover text-blue-500"
         >
          Forgot password?
         </p>
        </div>
        {errorElement}
        <div className="form-control mt-5">
         <input
          type="submit"
          value="Login"
          className="btn btn-primary text-secondary font-bold border-0"
         ></input>
        </div>
        <p className="label-text-alt text-center mt-3">
         New to Reviewer?{" "}
         <Link
          to="/signUp"
          className="label-text-alt link link-hover text-blue-500"
         >
          Create new account
         </Link>
        </p>
       </form>
       <div className="divider my-2">OR</div>
       <button
        onClick={() => signInWithGoogle()}
        className="border border-gray-500 py-2 font-medium rounded"
       >
        {" "}
        <img className="inline w-6 mr-1" src={googleImage} alt="" /> Continue
        With Google
       </button>
      </div>
     </div>
    </div>
   </div>
   <Footer></Footer>
  </>
 );
};

export default Login;

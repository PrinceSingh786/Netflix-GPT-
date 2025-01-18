import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const togglesigninform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <img
        className="absolute inset-0  w-full h-full object-cover"
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="bg"
      />
      <div className="relative  flex items-center justify-center flex-grow">
        <form className="p-12 min-h-[500px] min-w-[300px] w-[35%]  bg-black bg-opacity-75 rounded">
          <h1 className=" font-bold text-4xl text-white mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name "
              className="p-2 m-2  w-full min-h-12 bg-gray-800 bg-opacity-50 border-[1px] border-white rounded"
            />
          )}
          <input
            type="text"
            placeholder="Email address "
            className="p-2 m-2  w-full min-h-12 bg-gray-800 bg-opacity-50 border-[1px] border-white rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full min-h-12  bg-gray-800 bg-opacity-50 border-[1px] border-white rounded"
          />
          <button className="w-full text-xl p-2 ml-2 mt-4 font-bold bg-red-700 text-white rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <label className="text-white block mt-4 lg:ml-36">
            Forgot Password?
          </label>
          <h3 className="text-white ml-2 mt-6">
            <b className="cursor-pointer " onClick={togglesigninform}>
              {isSignInForm
                ? " New to Netflix Sign Up Now"
                : " Already a member? Sign In Now "}
            </b>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setToggleSignup] = useState([true]);

  const toggleSignup = () => {
    setToggleSignup(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-fit"
          src="resources/media/photos/background-main-page.jpg"
        ></img>
      </div>

      <div
        className="relative
         bg-black bg-opacity-90
         p-12 top-52 
          mx-auto left-0 right-0"
        style={{ width: "400px" }}
      >
        <form className="m-auto text-white w-auto">
          <div className="w-full flex-col justify-center items-center space-y-5">
            <h1 className="p-2 text-4xl font-bold">
              {!isSignInForm ? "Sign Up" : "Sign In"}
            </h1>

            {!isSignInForm && (
              <>
                <input
                  className="p-4 w-full 
              border-gray-400 bg-black 
              border-textBoxes rounded-md  
              bg-opacity-10"
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  className="p-4  w-full 
              border-gray-400 bg-black 
              border-textBoxes rounded-md  
              bg-opacity-10"
                  type="text"
                  placeholder="Mobile No."
                />
              </>
            )}

            <input
              className="p-4  w-full 
              border-gray-400 bg-black 
              border-textBoxes rounded-md  
              bg-opacity-10"
              type="text"
              placeholder="Email"
            />

            <input
              className="p-4  w-full 
              border-gray-400 bg-black 
              border-textBoxes rounded-md  
              bg-opacity-10"
              type="text"
              placeholder="Password"
            />

            <button className="p-2  bg-signInRed w-full rounded-md">
              {!isSignInForm ? "Sign Up" : "Sign In"}
            </button>
            {isSignInForm && <div className="">Forgot password?</div>}

            <div className=" cursor-pointer" onClick={toggleSignup}>
              {isSignInForm
                ? "New to Netflix? Sign Up!"
                : "Already a member? Sign In!"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

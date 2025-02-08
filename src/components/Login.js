import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignInForm } from "../util/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/initialise";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setToggleSignup] = useState([true]);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef("");
  const password = useRef("");

  const handleSubmit = () => {
    const message = validateSignInForm(
      email.current.value,
      password.current.value
    );
    if (message) {
      setErrorMessage(message);
      return;
    }
    setErrorMessage(null);

    // Handle sign up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
          setErrorMessage(errorCode + ": " + errorMessage);
          navigate("/");
        })
        .finally(() => {
          email.current.value = "";
          password.current.value = "";
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
          setErrorMessage(errorCode + ": " + errorMessage);
          navigate("/");
        })
        .finally(() => {
          email.current.value = "";
          password.current.value = "";
        });
    }
  };

  const toggleSignup = () => {
    setToggleSignup(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          className="snap-none object-cover"
          style={{ height: "100vh", width: "100vw" }}
          alt="background"
          src="resources/media/photos/background-main-page.jpg"
        ></img>
      </div>

      <div
        className="relative
         bg-black bg-opacity-80
         p-12 top-52 
          mx-auto left-0 right-0
          rounded-lg
          "
        style={{ width: "400px" }}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="m-auto text-white w-auto"
        >
          <div className="w-full flex-col justify-center items-center space-y-5">
            <h1 className="p-2 text-4xl font-bold">
              {!isSignInForm ? "Sign Up" : "Sign In"}
            </h1>

            {!isSignInForm && (
              <>
                <input
                  className="p-4 w-full 
              border-gray-400
              border-textBoxes rounded-md  
              bg-opacity-10
              bg-black
              "
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  className="p-4 w-full 
              border-gray-400
              border-textBoxes rounded-md  
              bg-opacity-10
              bg-black
              "
                  type="text"
                  placeholder="Nick Name"
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
              ref={email}
            />

            <input
              className="p-4  w-full 
              border-gray-400 bg-black 
              border-textBoxes rounded-md  
              bg-opacity-10"
              type="password"
              placeholder="Password"
              ref={password}
            />

            <p className="text-red-500">{errorMessage ? errorMessage : ""}</p>

            <button
              onClick={handleSubmit}
              className="p-2  bg-signInRed w-full rounded-md"
            >
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

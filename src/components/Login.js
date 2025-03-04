import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignInForm } from "../util/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/initialise";
import { addUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  // State to toggle between Sign In and Sign Up forms
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  // Refs for form inputs
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const fullNameRef = useRef("");

  // Function to handle form submission for Sign In and Sign Up
  const handleSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef.current.value;

    // Validate the form fields
    const validationError = validateSignInForm(email, password);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    setErrorMessage(null);

    try {
      if (!isSignInForm) {
        // Handle user registration (Sign Up)
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Update user profile with full name
        await updateProfile(user, { displayName: fullName });
        
        // Updated user details can be found inside auth.currentUser object
        const currentUser = auth.currentUser;
        // Dispatch user details to Redux store
        dispatch(addUser({ uid: currentUser.uid, email: currentUser.email, displayName: currentUser.displayName }));
      } else {
        // Handle user authentication (Sign In)
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
      }
    } catch (error) {
      setErrorMessage(`${error.code}: ${error.message}`);
    } finally {
      // Clear input fields after submission
      emailRef.current.value = "";
      passwordRef.current.value = "";
      if (!isSignInForm) fullNameRef.current.value = "";
    }
  };

  // Function to toggle between Sign In and Sign Up modes
  const toggleFormType = () => setIsSignInForm((prev) => !prev);

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          className="snap-none object-cover"
          style={{ height: "100vh", width: "100vw" }}
          alt="background"
          src="resources/media/photos/background-main-page.jpg"
        />
      </div>

      <div className="relative bg-black bg-opacity-80 p-12 top-52 mx-auto rounded-lg" style={{ width: "400px" }}>
        <form onSubmit={(e) => e.preventDefault()} className="m-auto text-white w-auto">
          <div className="w-full flex-col justify-center items-center space-y-5">
            <h1 className="p-2 text-4xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {/* Full Name input for Sign Up only */}
            {!isSignInForm && (
              <input
                className="p-4 w-full border-gray-400 border-textBoxes rounded-md bg-opacity-10 bg-black"
                type="text"
                placeholder="Full Name"
                ref={fullNameRef}
              />
            )}

            {/* Email Input */}
            <input
              className="p-4 w-full border-gray-400 bg-black border-textBoxes rounded-md bg-opacity-10"
              type="email"
              placeholder="Email"
              ref={emailRef}
            />

            {/* Password Input */}
            <input
              className="p-4 w-full border-gray-400 bg-black border-textBoxes rounded-md bg-opacity-10"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />

            {/* Error Message Display */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {/* Submit Button */}
            <button onClick={handleSubmit} className="p-2 bg-signInRed w-full rounded-md">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            
            {/* Forgot Password Option */}
            {isSignInForm && <div>Forgot password?</div>}

            {/* Toggle between Sign In and Sign Up */}
            <div className="cursor-pointer" onClick={toggleFormType}>
              {isSignInForm ? "New to Netflix? Sign Up!" : "Already a member? Sign In!"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

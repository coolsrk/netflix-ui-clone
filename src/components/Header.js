import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/initialise";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    // This is to make header overlap
    <div className="z-20 absolute p-8 bg-gradient-to-b from-black w-full">
      <div className="w-44 ml-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
      </div>

      {currentUser && (
        <div
          className="absolute m-2 p-2 right-20 top-8 text-white"
          onClick={handleSignOut}
        >
          Sign-Out
        </div>
      )}
    </div>
  );
};

export default Header;

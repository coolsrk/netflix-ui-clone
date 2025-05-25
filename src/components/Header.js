import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/initialise";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
   * Use the useEffect hook to listen for authentication state changes
   * only once when the component is mounted.
   *
   * !
   * The reason we are using this inside Header component is because we want to check if the user is logged in or not
   * But it should happen inside components which comes under RouterProvider.
   * Othwise we can't use useNavigate() hook.
   */
  useEffect(() => {
    // Here we need to use onAuthStateChanged to check if the user is logged in or not
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    // This is to make header overlap
    <div className="z-20 absolute p-8 bg-gradient-to-b from-black w-full">
      <div className="w-44 ml-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
      </div>

      {/**
       * If user is logged in, show the sign-out button
       */}
      {currentUser && (          
          <div
            className="absolute m-2 p-2 right-20 top-8 text-white cursor-pointer flex items-center gap-2">
            <Search/>
            <FontAwesomeIcon icon="circle-user" style={{ color: 'white'}} size="2x" />
            <span onClick={handleSignOut}>Sign-Out</span>
          </div>
      )}
    </div>
  );
};

export default Header;

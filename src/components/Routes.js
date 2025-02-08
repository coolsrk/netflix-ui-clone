import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/initialise";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Routes = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // Use the useEffect hook to listen for authentication state changes
  // only once when the component is mounted
  useEffect(() => {
    // Here we need to use onAuthStateChanged to check if the user is logged in or not
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Routes;

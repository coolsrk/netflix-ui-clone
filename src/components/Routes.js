import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';
import Login from './Login';

const Routes = () => {

   const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse/>
    }
   ]); 

  return (
    <div className='bg-black'>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Routes;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';

const router =createBrowserRouter ([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])
   
   
   
   
;

export default router;
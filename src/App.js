import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from './components/AboutUs';
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import Error from "./components/Error";


const Applayout=() =>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    );
};
const approuter= createBrowserRouter([
    {
        path: "/",
        element:<Applayout/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/about",
                element:<AboutUs/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/restaurants/:resId",
                element:<ResMenu/>
            }
        ],
        errorElement:<Error/>
    }
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
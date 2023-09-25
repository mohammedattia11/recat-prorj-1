import React from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";

let routers = createHashRouter([{path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
]}])


export default function App() {
  return <>
  <RouterProvider router={routers}></RouterProvider>
  
  </>;
}

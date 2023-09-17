import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserAndEmp from "./Components/UserAndEmp";
import Home from "./Components/Home";
import Emplogin from "./Components/Emplogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/UserAndEmp",
    element: <UserAndEmp />,
  },
  {
    path: "/Emplogin",
    element: <Emplogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

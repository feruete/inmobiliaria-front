import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Crud from "./pages/crud/crud";
import Details from "./pages/details/details";
import DetailNotFound from "./pages/detailNotFound/detailNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  { path: "*", element: <DetailNotFound /> },
  { path: "/detailNotFound", element: <DetailNotFound /> },
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  { path: "/crud", element: <Crud /> },
  { path: "/details/:id", element: <Details /> },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

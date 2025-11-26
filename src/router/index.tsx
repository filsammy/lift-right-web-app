import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Programs from "../pages/Programs";
import Coaches from "../pages/Coaches";
import Membership from "../pages/Membership";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/programs", element: <Programs /> },
      { path: "/coaches", element: <Coaches /> },
      { path: "/membership", element: <Membership /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

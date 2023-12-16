import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: encodeURI('home'),
        element: (<App />),
      }
    ]
  },

]);
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./routes/root";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
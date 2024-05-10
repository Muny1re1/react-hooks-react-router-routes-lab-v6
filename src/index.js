import "./index.css";
import { createRoot } from "react-dom"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import App from "./App"; 

const router = createBrowserRouter(routes, {
  defaultRoute: "home"
});

const root = createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    
  </RouterProvider>
);
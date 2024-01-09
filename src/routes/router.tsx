import { createBrowserRouter } from "react-router-dom";
import About from "../page/About.tsx";
import Home from "../page/Home.tsx";
import App from "../App.tsx";
import NotFount from "../page/NotFount.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFount />,
  },
]);

export default routes;

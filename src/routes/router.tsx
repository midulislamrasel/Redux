import { createBrowserRouter } from "react-router-dom";
import About from "../page/About.tsx";
import Home from "../page/Home.tsx";
import App from "../App.tsx";

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
]);

export default routes;

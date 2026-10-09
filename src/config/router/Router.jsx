import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import {Landing} from "../../pages/Landing/Landing";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Landing /> }],
  },
]);

export { Routes };

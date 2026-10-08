import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";

const Routes = createBrowserRouter([{ path: "/", element: <MainLayout /> }]);

export { Routes };

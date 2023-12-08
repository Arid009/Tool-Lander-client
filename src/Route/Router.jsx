import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService";
import ManageService from "../Pages/ManageService";
import UpdatePage from "../Pages/UpdatePage";
import MySchedules from "../Pages/mySchedules";


const createdRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: '/servicedetail/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://assignment11-server-ochre.vercel.app/service/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/manageservice',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path: '/updatepage/:id',
                element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment11-server-ochre.vercel.app/service/${params.id}`)
            },
            {
                path:'/myschedule',
                element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
            }
        ]
    },
]);

export default createdRouter;
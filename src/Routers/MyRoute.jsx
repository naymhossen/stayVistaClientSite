import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import RoomDetails from "../Components/Rooms/RoomDetails/RoomDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path : "/signUp",
            element: <SignUp />
        },
        {
            path : "/roomDetails/:id",
            element: <RoomDetails />
        }
      ]
    },
 
  ]);
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import RoomDetails from "../Components/Rooms/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getALLRoms } from "../API/Rooms";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/roomDetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: () => getALLRoms(),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'addRoom'
      }
    ]
  }
]);

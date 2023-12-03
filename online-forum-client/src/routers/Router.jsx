import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import MemberShip from "../pages/memberShip/MemberShip";
import JoinUs from "../pages/joinUs/JoinUs";
import Login from "../pages/Login/Login";

import UserProfile from "../pages/Dashboard/UserDashboard/UserProfile/UserProfile";
import MyPost from "../pages/Dashboard/UserDashboard/MyPost/MyPost";
import AddPost from "../pages/Dashboard/UserDashboard/AddPost/AddPost";
import AdminProfile from "../pages/Dashboard/AdminDashboard/AdminProfile/AdminProfile";
import ManageUser from "../pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import MakeAnnouncement from "../pages/Dashboard/AdminDashboard/MakeAnnouncement/MakeAnnouncement";
import Activities from "../pages/Dashboard/AdminDashboard/Activities/Activities";
import DashboardLayout from "../layout/DashboardLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/membership",
        element: <MemberShip></MemberShip>,
      },
      {
        path: "/joinUs",
        element: <JoinUs></JoinUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "userProfile", // Updated to start with "/dashboard"
        element: <UserProfile></UserProfile>,
      },
      {
        path: "myPost", // Updated to start with "/dashboard"
        element: <MyPost></MyPost>,
      },
      {
        path: "addPost", // Updated to start with "/dashboard"
        element: <AddPost></AddPost>,
      },
      // ==================== admin routes =================
      {
        path: "adminProfile", // Updated to start with "/dashboard"
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageUser", // Updated to start with "/dashboard"
        element: <ManageUser></ManageUser>,
      },
      {
        path: "makeAnnouncement", // Updated to start with "/dashboard"
        element: <MakeAnnouncement></MakeAnnouncement>,
      },
      {
        path: "activities", // Updated to start with "/dashboard"
        element: <Activities></Activities>,
      },
    ],
  },
]);

export default Router;

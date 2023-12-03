// DashboardLayout.jsx

import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-indigo-600 text-white p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard/userProfile"
              className="block py-2 px-4 rounded-md hover:bg-indigo-700"
              activeClassName="bg-indigo-700"
            >
              User Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myPost"
              className="block py-2 px-4 rounded-md hover:bg-indigo-700"
              activeClassName="bg-indigo-700"
            >
              My Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addPost"
              className="block py-2 px-4 rounded-md hover:bg-indigo-700"
              activeClassName="bg-indigo-700"
            >
              Add Post
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Dashboard Content */}
      <main className="flex-1 p-4 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

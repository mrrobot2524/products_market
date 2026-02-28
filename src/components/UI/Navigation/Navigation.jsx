import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-center space-x-4 max-w-full w-full p-3 mb-4 mt-4 bg-indigo-950 rounded-2xl">
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          `font-bold rounded-lg px-3 py-2  hover:bg-white hover:text-gray-900 ${isActive ? "bg-white text-gray-900" : "text-white"}`
        }
      >
        Posts
      </NavLink>
      <NavLink
        to="/team"
        className={({ isActive }) =>
          `font-bold rounded-lg px-3 py-2  hover:bg-white hover:text-gray-900 ${isActive ? "bg-white text-gray-900" : "text-white"}`
        }
      >
        Team
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `font-bold rounded-lg px-3 py-2  hover:bg-white hover:text-gray-900 ${isActive ? "bg-white text-gray-900" : "text-white"}`
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) =>
          `font-bold rounded-lg px-3 py-2  hover:bg-white hover:text-gray-900 ${isActive ? "bg-white text-gray-900" : "text-white"}`
        }
      >
        Reports
      </NavLink>
    </nav>
  );
};
export default Navigation;

import { NavLink } from "react-router-dom";
import {
  CalendarIcon,
  HomeIcon,
  ModernHomeIcon,
  SettingsIcon,
  UsersIcon,
} from "./Icons";

const MainNav = () => {
  return (
    <div className="mt-6 w-full">
      <NavLink to={"dashboard"} className="relative block group mt-2">
        {({ isActive }) => (
          <>
            <div
              className={`${
                isActive ? "bg-gray-100" : "flex group-hover:bg-gray-100"
              }  text-gray-700 flex transition-all duration-300 py-3 px-8 rounded-lg`}
            >
              <HomeIcon
                className={`${
                  isActive
                    ? "text-indigo-800"
                    : "text-gray-500 group-hover:text-indigo-500 transition-all duration-300"
                } w-6 h-6`}
              />
              <p className="font-medium ml-4">Home</p>
            </div>
          </>
        )}
      </NavLink>

      <NavLink to={"bookings"} className="relative block group mt-2">
        {({ isActive }) => (
          <>
            <div
              className={`${
                isActive ? "bg-gray-100" : "flex group-hover:bg-gray-100"
              }  text-gray-700 flex transition-all duration-300 py-3 px-8 rounded-lg`}
            >
              <CalendarIcon
                className={`${
                  isActive
                    ? "text-indigo-800"
                    : "text-gray-500 group-hover:text-indigo-500 transition-all duration-300"
                } w-6 h-6`}
              />
              <p className="font-medium ml-4">Bookings</p>
            </div>
          </>
        )}
      </NavLink>

      <NavLink to={"cabins"} className="relative block group mt-2">
        {({ isActive }) => (
          <>
            <div
              className={`${
                isActive ? "bg-gray-100" : "flex group-hover:bg-gray-100"
              }  text-gray-700 flex transition-all duration-300 py-3 px-8 rounded-lg`}
            >
              <ModernHomeIcon
                className={`${
                  isActive
                    ? "text-indigo-800"
                    : "text-gray-500 group-hover:text-indigo-500 transition-all duration-300"
                } w-6 h-6`}
              />
              <p className="font-medium ml-4">Cabins</p>
            </div>
          </>
        )}
      </NavLink>

      <NavLink to={"users"} className="relative block group mt-2">
        {({ isActive }) => (
          <>
            <div
              className={`${
                isActive ? "bg-gray-100" : "flex group-hover:bg-gray-100"
              }  text-gray-700 flex transition-all duration-300 py-3 px-8 rounded-lg`}
            >
              <UsersIcon
                className={`${
                  isActive
                    ? "text-indigo-800"
                    : "text-gray-500 group-hover:text-indigo-500 transition-all duration-300"
                } w-6 h-6`}
              />
              <p className="font-medium ml-4">Users</p>
            </div>
          </>
        )}
      </NavLink>

      <NavLink to={"settings"} className="relative block group mt-2">
        {({ isActive }) => (
          <>
            <div
              className={`${
                isActive ? "bg-gray-100" : "flex group-hover:bg-gray-100"
              }  text-gray-700 flex transition-all duration-300 py-3 px-8 rounded-lg`}
            >
              <SettingsIcon
                className={`${
                  isActive
                    ? "text-indigo-800"
                    : "text-gray-500 group-hover:text-indigo-500 transition-all duration-300"
                } w-6 h-6`}
              />
              <p className="font-medium ml-4">Settings</p>
            </div>
          </>
        )}
      </NavLink>
    </div>
  );
};

export default MainNav;

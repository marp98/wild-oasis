import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="bg-gray-100 pt-16 px-20 pb-24 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

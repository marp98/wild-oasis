import Logo from "./Logo";
import MainNav from "./MainNav";

const SideBar = () => {
  return (
    <aside className="bg-gray-50 py-12 px-9 border-r border-gray-100 w-96 flex flex-col items-center">
      <Logo />

      <MainNav />
    </aside>
  );
};

export default SideBar;

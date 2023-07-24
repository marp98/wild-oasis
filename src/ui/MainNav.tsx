import { CalendarIcon, HomeIcon } from "./Icons";
import MainNavLink from "./MainNavLink";

const MainNav = () => {
  return (
    <div className="mt-6">
      <MainNavLink href="dashboard" linkText="Home">
        <HomeIcon className="w-6 h-6" />
      </MainNavLink>

      <MainNavLink href="/bookings" linkText="Bookings">
        <CalendarIcon className="w-6 h-6" />
      </MainNavLink>
    </div>
  );
};

export default MainNav;

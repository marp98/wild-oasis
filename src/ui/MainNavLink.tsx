import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  href: string;
  linkText: string;
  children: ReactNode;
}

const MainNavLink = ({ href, linkText, children }: Props) => {
  return (
    <NavLink to={href} className="relative block group mt-6">
      {({ isActive }) => (
        <>
          <div
            className={`${
              isActive
                ? "bg-gray-100 text-gray-800"
                : "flex text-gray-400 group-hover:text-emerald-500"
            } flex transition-all duration-200`}
          >
            {children}
            <p className="font-medium">{linkText}</p>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default MainNavLink;

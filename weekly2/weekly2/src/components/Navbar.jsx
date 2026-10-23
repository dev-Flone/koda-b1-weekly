import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navigationItems from "../data/navigation";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleNavigation = () => {
    setIsActive(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-100 bg-white/95"
    >
      <div className="top-20 flex h-16 items-center justify-between px-6 md:px-25 lg:px-12">
        <Link
          to="/"
          onClick={handleNavigation}
          className="font-bold text-[18px] text-center leading-7 text-[#111111] cursor-pointer"
        >
          Alex Carter
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={handleNavigation}
              className={({ isActive: current }) =>
                `rounded-md px-4 py-2 text-sm font-medium ${current ? "bg-[#F3F4F6] text-[#111111]" : "text-[#4A5565] hover:text-[#111111]"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={handleNavigation}
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          className="flex h-9.5 w-9.5 cursor-pointer rounded-md p-2 lg:hidden"
          aria-label={isActive ? "Close menu" : "Open menu"}
          aria-expanded={isActive}
          aria-controls="navbar-menu"
          onClick={() => setIsActive((active) => !active)}
        >
          <div className="flex h-5.5 w-5.5 flex-col justify-center gap-1">
            <span
              className={`h-0.5 w-full rounded-full bg-gray-900 transition-all duration-200 ${isActive ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-gray-900 transition-all duration-200 ${isActive ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-gray-900 ${isActive ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <ul
        id="navbar-menu"
        className={`absolute flex w-full flex-col gap-1 border-t-[.77px] border-[#F3F4F6] bg-white px-6 pb-5 pt-2 shadow-lg lg:hidden transition-all duration-600 ease-in-out ${
          isActive
            ? "translate-y-0"
            : "opacity-0 -translate-2 pointer-events-none"
        }`}
      >
        {navigationItems.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              onClick={handleNavigation}
              className={({ isActive }) =>
                `block w-full rounded-md px-4 py-3 text-left
              text-[14px] font-medium leading-5 text-[#111111]
              transition-all duration-200
              ${
                isActive
                  ? "bg-[#F3F4F6]"
                  : "bg-white/95 hover:bg-[#F3F4F6] hover:translate-x-2"
              }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}

        <li>
          <Link
            to="/contact"
            onClick={handleNavigation}
            className="block rounded-md bg-[#111111] px-4 py-2
            text-[14px] font-medium leading-5 text-white
            transition-colors duration-200 hover:bg-black"
          >
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

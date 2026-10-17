import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav>
      {/* Hamburger Menu */}
      <div className="px-6 flex justify-between h-16 items-center">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-bold text-[18px] text-center leading-7 text-[#111111] cursor-pointer"
        >
          Alex Carter
        </Link>

        {/* Hamburger Button */}
        <button
          type="button"
          className="flex h-9.5 w-9.5 rounded-md p-2 cursor-pointer
      "
          aria-label={isActive ? "Close menu" : "Open menu"}
          aria-expanded={isActive}
          aria-controls="navbar-menu"
          onClick={toggleMenu}
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

      {/* Dropdown Menu */}
      {isActive && (
        <ol
          id="navbar-menu"
          className="flex flex-col gap-1 border-t-[.77px] border-[#F3F4F6] pt-2 px-6 pb-5"
        >
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 w-full text-left font-medium text-[14px] leading-5 text-[#111111] ${isActive ? "bg-[#F3F4F6]" : "bg-white hover:bg-gray-50"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default Navbar;

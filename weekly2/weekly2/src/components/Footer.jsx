import { ArrowUp } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import navigationItems from "../data/navigation";

const Footer = () => {
  return (
    <footer className="bg-[#101828] px-6 py-14 md:px-8 lg:px-12">
      {/* Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Alex Carter */}
        <div className="flex flex-col">
          <Link to="/" className="font-bold leading-7 text-[20px] text-white">
            Alex Carter
          </Link>
          <p className="pt-3 text-[14px] leading-[22.75px] text-[#99A1AF]">
            Full-stack software developer based in San Francisco, CA. Building
            thoughtful web experiences one commit at a time.
          </p>
          <div className="pt-6 flex gap-3">
            <span className="py-1.5 px-3 rounded-md bg-[#1E2939] text-[12px] text-[#99A1AF] font-medium leading-4">
              GitHub
            </span>
            <span className="py-1.5 px-3 rounded-md bg-[#1E2939] text-[12px] text-[#99A1AF] font-medium leading-4">
              LinkedIn
            </span>
            <span className="py-1.5 px-3 rounded-md bg-[#1E2939] text-[12px] text-[#99A1AF] font-medium leading-4">
              Twitter
            </span>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h1 className="font-semibold text-[14px] text-white leading-5 uppercase tracking-[.7px]">
            quick links
          </h1>
          <ol className="pt-5 flex flex-col gap-3">
            {navigationItems.map(({ label, to }) => (
              <li key={to} className="text-[14px] leading-5">
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#99A1AF] hover:text-white"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ol>
        </div>
        {/* Contact */}
        <div>
          <h1 className="uppercase font-semibold text-[14px] text-white tracking-[.7px] leading-5">
            Contact
          </h1>
          <div className="flex flex-col gap-3 pt-5">
            <a
              href="mailto:alex.carter@email.com"
              className="text-[14px] leading-5 text-[#99A1AF] hover:text-white"
            >
              alex.carter@email.com
            </a>
            <a
              href="tel:+14155550192"
              className="text-[14px] leading-5 text-[#99A1AF] hover:text-white"
            >
              +1 (415) 555-0192
            </a>
            <p className="text-[14px] leading-5 text-[#99A1AF]">
              San Francisco, CA 94105
            </p>
          </div>
        </div>
        {/* Margin */}
        <div className="pt-10 lg:col-span-3">
          <div className="flex flex-col items-center justify-between gap-4 border-t-[.77px] border-[#1E2939] pt-6 md:flex-row">
            <p className="text-[14px] text-[#6A7282] leading-5">
              © 2026 Alex Carter. All rights reserved.
            </p>
            <Link
              to="/"
              className="flex gap-2 items-center text-[14px] text-[#99A1AF] leading-5"
            >
              Back to Top <ArrowUp size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const stats = [
  { value: "20+", label: "Project" },
  { value: "3+", label: "Years Exp." },
  { value: "15+", label: "Happy Clients" },
];

const Container = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-12 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-28">
      {/* Container */}
      <div className="w-full max-w-xl justify-self-center lg:justify-self-start">
        <p className="text-sm font-semibold uppercase text-[#FF5F22]">
          available for hire
        </p>
        <h1 className="pt-5 text-4xl font-extrabold leading-tight text-[#101828] md:text-5xl">
          Hi, I'm Alex Carter
        </h1>
        <h2 className="pt-5 text-xl font-medium text-[#4A5565]">
          Full-Stack Software Developer
        </h2>
        <p className="pt-4 text-base leading-relaxed text-[#6A7282]">
          I build fast, accessible, and beautifully designed web applications.
          With 3+ years of experience across the full stack, I turn complex
          problems into elegant digital products.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            to="/projects"
            className="rounded-lg bg-[#111111] px-7 py-3.5 text-base font-semibold text-white"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border-[1.53px] px-7 py-3.5 text-base font-semibold"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex flex-wrap gap-8 pt-10 md:gap-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl font-bold leading-8">{value}</span>
              <span className="text-sm font-normal leading-5 text-[#6A7282]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Image Container */}
      <div className="relative flex justify-end md:flex-col md:items-center mx-auto w-full max-w-xl pb-8 lg:pb-0">
        <div className="relative pr-6 h-72 w-full md:h-104 lg:h-80 lg:w-[320px] flex flex-col items-center">
          <img
            src="/images/hero.jpg"
            alt="Alex Carter, full-stack software developer"
            className="h-full rounded-2xl object-cover"
          />
          <div className="absolute -bottom-4 -left-5 rounded-xl bg-[#FF5F22] px-4 py-2 text-white shadow-md">
            Open to Work
          </div>
          <div className="absolute -right-3 -top-3 rounded-xl border-[0.77px] border-[#F3F4F6] bg-white px-3 py-2 shadow-md">
            San Francisco, CA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

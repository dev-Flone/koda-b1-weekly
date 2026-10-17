import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div className="mx-auto grid min-h-[781.63px] w-full max-w-6xl grid-cols-1 grid-rows-[auto_auto] gap-y-16 px-6 pt-20 opacity-100">
      {/* Container */}
      <div className="w-full max-w-[342.23px] justify-self-center">
        <p className="text-[14px] text-[#FF5F22] font-semibold uppercase">
          available for hire
        </p>
        <h1 className="pt-5 font-extrabold text-[48px] leading-15 text-[background: #101828]">
          Hi, I'm Alex Carter
        </h1>
        <h3 className="pt-5 font-medium text-[20px] text-[#4A5565]">
          Full-Stack Software Developer
        </h3>
        <p className="pt-4 text-[16px] leading-6.5 text-[#6A7282;]">
          I build fast, accessible, and beautifully designed web applications.
          With 3+ years of experience across the full stack, I turn complex
          problems into elegant digital products.
        </p>
        <div className="pt-8 flex gap-4 items-center ">
          <Link
            to="/projects"
            className="px-7 py-3.5 bg-[#111111] text-white font-semibold text-[16px] rounded-lg"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 border-[1.53px] rounded-lg font-semibold text-[16px]"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex gap-10 h-23.5 pt-10">
          <div className="flex flex-col">
            <span className="font-bold text-[24px] leading-8">20+</span>
            <span className="font-normal text-[14px] leading-5 text-[#6A7282]">
              Project
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[24px] leading-8">3+</span>
            <span className="font-normal text-[14px] leading-5 text-[#6A7282]">
              Years Exp.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[24px] leading-8">15+</span>
            <span className="font-normal text-[14px] leading-5 text-[#6A7282]">
              Happy Clients
            </span>
          </div>
        </div>
      </div>
      {/* Image Container */}
      <div className="w-full max-w-[342.23px] justify-self-center relative">
        <div className="relative h-72 w-full max-w-[342.23px] justify-self-center justify-items-center">
          <img
            src="../../public/images/hero.jpg"
            alt="hero-images"
            className="h-full w-fit rounded-2xl object-cover"
          />
          <div className="absolute -bottom-4 left-0 rounded-xl bg-[#FF5F22] px-4 py-2 text-white shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            Open to Work
          </div>
          <div className="absolute -right-3 -top-3 rounded-xl border-[0.77px] border-[#F3F4F6] bg-white px-3 py-2 shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]">
            San Francisco, CA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

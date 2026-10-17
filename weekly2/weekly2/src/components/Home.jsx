import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = ({ page = "home" }) => {
  const sectionClassName = (name, className) => {
    const isVisible =
      page === "home" ||
      page === name ||
      (name === "skills" && (page === "about" || page === "experience"));

    return `${className} ${isVisible ? "" : "hidden"}`;
  };

  return (
    <section>
      {/* Content 1 */}
      <div className={sectionClassName("about", "py-20 bg-[#F9FAFB]")}>
        <div className="px-6">
          {/* container1 */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-semibold text-[12px] leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">
              who i am
            </p>
            <h1 className="font-bold text-[30px] leading-9 capitalize text-[#101828]  pt-3">
              a little about me
            </h1>
            <p className="text-[16px] leading-6.5 text-[#6A7282] text-center pt-4">
              I'm passionate about writing clean, maintainable code and crafting
              experiences that users genuinely enjoy.
            </p>
            <div className="pt-5 px-[147.12px]">
              <div className="bg-black h-1 w-12"></div>
            </div>
          </div>
          {/* Container 2 */}
          <div className="flex flex-col items-center pt-14">
            <div className="rounded-xl border-[.77px] border-[#F3F4F6] p-7 shadow-md flex flex-col gap-2">
              <h1 className="capitalize font-semibold text-[18px]leading-[28px] text-[#101828] ">
                problem solver
              </h1>
              <p className="text-[14px] text-[#6A7282]">
                I enjoy breaking down complex challenges into simple, elegant
                solutions that scale well over time.
              </p>
            </div>
            <div className="rounded-xl border-[.77px] border-[#F3F4F6] p-7 shadow-md">
              <h1 className="capitalize font-semibold text-[18px]leading-[28px] text-[#101828] ">
                team player
              </h1>
              <p className="text-[14px] text-[#6A7282]">
                Experienced collaborating with designers, product managers, and
                engineers in agile environments.
              </p>
            </div>
            <div className="rounded-xl border-[.77px] border-[#F3F4F6] p-7 shadow-md">
              <h1 className="capitalize font-semibold text-[18px]leading-[28px] text-[#101828] ">
                lifelong learner
              </h1>
              <p className="text-[14px] text-[#6A7282]">
                Always exploring new tools and technologies. Currently deepening
                my cloud architecture and DevOps skills.
              </p>
            </div>
          </div>
          {/* Container 3 */}
          <Link
            to="/about"
            className="flex pt-10 justify-center gap-2 font-semibold text-[14px] leading-5"
          >
            Learn more about me <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Content 2 */}
      <div className={sectionClassName("skills", "py-20")}>
        <div className="px-6">
          {/* Container 1 */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase">
              technical skills
            </p>
            <h1 className="font-bold text-[30px] leading-9 text-[#101828] capitalize">
              what i work with
            </h1>
            <p className="text-[16px] text-center text-[#6A7282]">
              A snapshot of the tools and technologies I use to build modern web
              applications.
            </p>
            <div className="w-12 h-1 bg-[#111111]"></div>
          </div>
          {/* Container 2 */}
          <div className="pt-14 flex flex-wrap justify-center gap-2">
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                React
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                TypeScript
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                JavaScript
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                Node.js
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                Python
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                PostgreSQL
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                MongoDB
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                Docker
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                AWS
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                Next.js
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                REST APIs
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                GraphQL
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                Tailwind CSS
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                Figma
              </p>
            </div>
            <div
              className="py-2 px-4 rounded-[340282001837565600000000000000000000000px]
            bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] w-fit"
            >
              <p className="font-medium text-[14px] leading-5 text-[#FF5F22]">
                Git
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content 3 */}
      <div className={sectionClassName("projects", "py-20 bg-[#F9FAFB]")}>
        <div className="px-6">
          {/* Container 1 */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase">
              my work
            </p>
            <h1 className="font-bold text-[30px] leading-9 text-[#101828] capitalize">
              featured projects
            </h1>
            <p className="text-[16px] text-center text-[#6A7282]">
              A selection of projects that showcase my skills across the full
              development stack.
            </p>
            <div className="w-12 h-1 bg-[#111111]"></div>
          </div>
          {/* Container 2 */}
          <div className="pt-14">
            <div className="flex flex-col gap-7">
              {/* Image 1 */}
              <div className="rounded-xl border-[.77px] border-[#F3F4F6] shadow-md">
                <div>
                  <img
                    src="../../public/images/hero1.jpg"
                    alt="hero1.jpg"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-7">
                  <h1 className="font-semibold text-[18px] leading-7 text-[#101828]">
                    ShopEase
                  </h1>
                  <p className="text-[14px] text-[#6A7282]">
                    A full-featured e-commerce platform with product catalog,
                    cart management, and Stripe payment integration.
                  </p>
                  <div className="flex gap-2 pt-4">
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        React
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        Node.js
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        MongoDB
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        Stripe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image 2 */}
              <div className="rounded-xl border-[.77px] border-[#F3F4F6] shadow-md">
                <div>
                  <img
                    src="../../public/images/hero2.jpg"
                    alt="hero1.jpg"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-7">
                  <h1 className="font-semibold text-[18px] leading-7 text-[#101828]">
                    TaskFlow
                  </h1>
                  <p className="text-[14px] text-[#6A7282]">
                    A drag-and-drop task manager with real-time collaboration,
                    team workspaces, and deadline tracking.
                  </p>
                  <div className="flex gap-2 pt-4">
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        React
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        TypeScript
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        Firebase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image 3 */}
              <div className="rounded-xl border-[.77px] border-[#F3F4F6] shadow-md">
                <div>
                  <img
                    src="../../public/images/hero3.jpg"
                    alt="hero1.jpg"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-7">
                  <h1 className="font-semibold text-[18px] leading-7 text-[#101828]">
                    ChatSpace
                  </h1>
                  <p className="text-[14px] text-[#6A7282]">
                    Real-time messaging platform with channels, direct messages,
                    file sharing, and emoji reactions.
                  </p>
                  <div className="flex gap-2 pt-4">
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        React
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        Socket.io
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        Express
                      </p>
                    </div>
                    <div className="rounded-[340282001837565600000000000000000000000px] px-2.5 py-1 border-[.77px] border-[#E5E7EB] bg-[#F9FAFB]">
                      <p className="font-medium text-[12px] leading-4 text-[#4A5565]">
                        MongoDB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container 3 */}
          <div className="flex flex-col items-center pt-10">
            <Link
              to="/projects"
              className="rounded-lg bg-[#111111] px-6 py-3 text-[#FFFFFF]"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Content 4 */}
      <div className={sectionClassName("experience", "py-20")}>
        <div className="px-6">
          {/* Container 1 */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase">
              testimonial
            </p>
            <h1 className="font-bold text-[30px] leading-9 text-[#101828] capitalize">
              what client say
            </h1>
            <p className="text-[16px] text-center text-[#6A7282]">
              Feedback from people I've had the pleasure of working with.
            </p>
            <div className="w-12 h-1 bg-[#111111]"></div>
          </div>
          {/* Container 2 */}
          <div className="pt-14">
            <div className="flex flex-col gap-7">
              {/* Review 1 */}
              <div className="p-7 bg-[#F9FAFB] border-[.77px] border-[#F3F4F6] rounded-xl">
                <p className="italic text-[14px]-skew-x-[14deg] text-[#4A5565]">
                  “Alex delivered our e-commerce platform ahead of schedule. The
                  code quality was outstanding and the UI exceeded our
                  expectations.”
                </p>
                <div className="pt-6 flex gap-4">
                  <img
                    src="../../public/images/person1.jpg"
                    alt="person1.jpg"
                    className="rounded-[340282001837565600000000000000000000000px] w-12 h-12"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-[14px] leading-5 text-[#101828]">
                      Sarah Johnson
                    </h1>
                    <p className="text-[12px] text-[#6A7282] leading-4">
                      CEO, BrightShop Inc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Review 2 */}
              <div className="p-7 bg-[#F9FAFB] border-[.77px] border-[#F3F4F6] rounded-xl">
                <p className="italic text-[14px]-skew-x-[14deg] text-[#4A5565]">
                  “Working with Alex was a pleasure. They understood our
                  requirements immediately and brought creative solutions to
                  complex problems.”
                </p>
                <div className="pt-6 flex gap-4">
                  <img
                    src="../../public/images/person2.jpg"
                    alt="person2.jpg"
                    className="rounded-[340282001837565600000000000000000000000px] w-12 h-12"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-[14px] leading-5 text-[#101828]">
                      Michael Chen
                    </h1>
                    <p className="text-[12px] text-[#6A7282] leading-4">
                      CTO, Velocity Labs
                    </p>
                  </div>
                </div>
              </div>
              {/* Review 3 */}
              <div className="p-7 bg-[#F9FAFB] border-[.77px] border-[#F3F4F6] rounded-xl">
                <p className="italic text-[14px]-skew-x-[14deg] text-[#4A5565]">
                  “Alex transformed our outdated website into a modern,
                  responsive platform. Traffic increased 40% within the first
                  month of launch.”
                </p>
                <div className="pt-6 flex gap-4">
                  <img
                    src="../../public/images/person3.jpg"
                    alt="person3.jpg"
                    className="rounded-[340282001837565600000000000000000000000px] w-12 h-12"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-[14px] leading-5 text-[#101828]">
                      Emily Rodriguez
                    </h1>
                    <p className="text-[12px] text-[#6A7282] leading-4">
                      Marketing Director, Apex Digital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content 5 */}
      <div className={sectionClassName("contact", "py-20 bg-[#111111]")}>
        <div className="px-6 flex flex-col items-center">
          <h1 className="capitalize font-bold text-[30px] text-white leading-9 text-center">
            let's work together
          </h1>
          <p className="text-[16px] text-[#FFD6A8] leading-6.5 text-center pt-4 pb-8">
            I'm currently available for freelance projects and full-time
            opportunities. Let's build something great.
          </p>
          <Link
            to="/contact"
            className="rounded-lg bg-[#FF5F22] font-bold text-[16px] leading-6 px-6 py-3"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

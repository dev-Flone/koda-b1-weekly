import { MdArrowRight } from "react-icons/md";

const About = () => {
  const academicList = [
    {
      degree: "B.S. Computer Science",
      institution: "UC Berkeley · Berkeley, CA",
      year: "2019 - 2023",
      description:
        "Graduated with honors. Dean's list 2021 & 2022. Focused on software engineering, distribution systems, and human-computer interaction. ",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Codecademy Pro · Online",
      year: "2022",
      description:
        "Intensive program covering modern JavaScript, React, Node.js, databases, and deployment workflows using industry-standard tools.",
    },
    {
      degree: "Data Structures & Algorithms",
      institution: "Coursera — Stanford University · Online",
      year: "2021",
      description:
        "Certificate course covering sorting algorithms, trees, graphs, dynamic programming, and complexity analysis.",
    },
  ];
  return (
    <section>
      {/* About 1 */}
      <div className="border-b-[.77px] border-[#F3F4F6] py-16 bg-[#F3F4F6]">
        <div className="px-6 flex flex-col items-center">
          <p className="font-semibold text-[12px] leading-4 text-[#FF5F22] uppercase text-center">
            get to know me
          </p>
          <h1 className="pt-3 text-[36px] text-[#101828] font-extrabold leading-10 capitalize text-center">
            about alex
          </h1>
          <p className="pt-4 text-[16px] leading-6 text-[#6A7282] text-center">
            A passionate developer who loves building things that make a real
            difference.
          </p>
        </div>
      </div>

      {/* About 2 */}
      <div className="py-20">
        <div className="grid grid-cols-1 gap-16 justify-items-center">
          <div className="row-start-1 col-start-1 row-span-1 col-span-1 h-72">
            <img
              src="/images/hero.jpg"
              alt="hero.jpg"
              className="rounded-2xl shadow-md w-72 h-72"
            />
          </div>
          <div className="row-start-2 col-start-1 row-span-1 col-span-1 w-[342.23px]">
            <h1 className="font-bold text-[24px] leading-8 text-[#101828]">
              Building the web, one line at a time.
            </h1>
            <div className="pt-5">
              <p className="text-[16px] leading-6.5 text-[#6A7282]">
                I'm Alex Carter, a full-stack software developer based in San
                Francisco, CA. I graduated from UC Berkeley with a B.S. in
                Computer Science in 2023 and have been building web products
                professionally ever since.
              </p>
              <p className="text-[16px] leading-6.5 text-[#6A7282] pt-4">
                My stack spans React and TypeScript on the frontend, Node.js and
                Python on the backend, and PostgreSQL and MongoDB for data. I
                care deeply about performance, accessibility, and writing code
                that my future self won't hate.
              </p>
              <p className="text-[16px] leading-6.5 text-[#6A7282] pt-4">
                When I'm not coding, you'll find me rock climbing at the local
                gym, experimenting with pour-over coffee, or reading science
                fiction. I'm actively looking for my next challenge.
              </p>
            </div>
            <div className="pt-7 flex flex-wrap gap-3">
              <span className="py-2 px-4 bg-[#F9FAFB] border-[.77px] border-[#E5E7EB] rounded-full">
                San Francisco, CA
              </span>
              <span className="py-2 px-4 bg-[#F9FAFB] border-[.77px] border-[#E5E7EB] rounded-full">
                Open to Roles
              </span>
              <span className="py-2 px-4 bg-[#F9FAFB] border-[.77px] border-[#E5E7EB] rounded-full">
                CS, UC Berkeley
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About 3 */}
      <div className="py-20 bg-[#F9FAFB]">
        <div className="px-6">
          {/* Container 1 */}
          <div>
            <p className="font-semibold text-[12px] text-[#FF5F22] leading-4 text-center tracking-[1.2px] uppercase">
              education
            </p>
            <h1 className="pt-3 text-[30px] text-[#101828] font-bold leading-9 text-center capitalize">
              academic background
            </h1>
            <div className="pt-5 px-[147.12px]">
              <div className="w-12 h-1 bg-[#111111] rounded-full mx-auto"></div>
            </div>
          </div>

          {/* Container 2 */}
          <ol className="relative pt-14 pl-12 flex flex-col gap-10">
            {/* Garis vertikal timeline */}
            <div className="absolute left-3.75 top-14 bottom-0 w-px bg-[#E5E7EB]" />

            {academicList.map((list, index) => (
              <li key={index} className="relative">
                {/* Timeline marker */}
                <div className="absolute -left-9.5 top-2 w-3 h-3 bg-[#101828] border-2 border-white rounded-sm shadow-sm z-10" />

                {/* Card */}
                <div className="p-6 border-[.77px] border-[#F3F4F6] bg-white shadow-md rounded-xl">
                  <div className="flex flex-col gap-2">
                    <div>
                      <h2 className="text-[16px] text-[#101828] font-semibold leading-6">
                        {list.degree}
                      </h2>

                      <h3 className="pt-0.5 text-[14px] text-[#FF5F22] font-medium leading-5">
                        {list.institution}
                      </h3>
                    </div>

                    <span className="py-1 px-3 bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] rounded-full text-[12px] text-[#FF5F22] w-fit">
                      {list.year}
                    </span>
                  </div>

                  <p className="pt-2 text-[14px] text-[#6A7282] leading-[22.75px]">
                    {list.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* About 4 */}
      <div className="py-20">
        <div className="px-6">
          {/* Heading */}
          <div>
            <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase text-center font-semibold">
              career
            </p>
            <h1 className="pt-3 text-[30px] text-[#101828] leading-9 text-center font-bold capitalize">
              work experience
            </h1>
            <div className="pt-5 px-[147.12px]">
              <div className="h-1 w-12 rounded-full bg-[#111111] mx-auto"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 pt-14">
            {/* Card 1 */}
            <div className="rounded-xl p-7 border-[.77px] border-[#F3F4F6] shadow-md">
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-[18px] text-[#101828] leading-7 font-semibold capitalize">
                    junior software developer
                  </h1>
                  <h2 className="pt-0.5 text-[14px] text-[#111111] leading-5 font-medium">
                    TechCorp Inc. · San Francisco, CA
                  </h2>
                </div>
                <span className="rounded-full py-1.5 px-3 bg-[#F9FAFB] border-[.77px] border-[#E5E7EB] font-medium text-[12px] text-[#4A5565] leading-4 w-fit">
                  Jan 2023 - Present
                </span>
              </div>
              <div className="pt-4">
                <div className="flex gap-2.5">
                  <MdArrowRight color="#FF5F22" />
                  <p className="text-[14px] text-[#6A7282] leading-5">
                    Build and maintain full-stack features for a B2B SaaS
                    platform serving 10,000+ users.
                  </p>
                </div>
                <div className="flex gap-2.5 pt-2.5">
                  <MdArrowRight color="#FF5F22" />
                  <p className="text-[14px] text-[#6A7282] leading-5">
                    Collaborate with designers and senior engineers in 2-week
                    agile sprints.
                  </p>
                </div>
                <div className="flex gap-2.5 pt-2.5">
                  <MdArrowRight color="#FF5F22" />
                  <p className="text-[14px] text-[#6A7282] leading-5">
                    Reduced API response times by 35% through query optimization
                    and Redis caching.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl p-7 border-[.77px] border-[#F3F4F6] shadow-md">
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-[18px] text-[#101828] leading-7 font-semibold capitalize">
                    Software Engineering Intern
                  </h1>
                  <h2 className="pt-0.5 text-[14px] text-[#111111] leading-5 font-medium">
                    StartupXYZ · San Jose, CA
                  </h2>
                </div>
                <span className="rounded-full py-1.5 px-3 bg-[#F9FAFB] border-[.77px] border-[#E5E7EB] font-medium text-[12px] text-[#4A5565] leading-4 w-fit">
                  May 2022 – Aug 2022
                </span>
              </div>
              <div className="pt-4">
                <div className="flex gap-2.5">
                  <MdArrowRight color="#FF5F22" />
                  <p className="text-[14px] text-[#6A7282] leading-5">
                    Developed React components for the company's customer-facing
                    dashboard.
                  </p>
                </div>
                <div className="flex gap-2.5 pt-2.5">
                  <MdArrowRight color="#FF5F22" />
                  <p className="text-[14px] text-[#6A7282] leading-5">
                    Wrote unit and integration tests, achieving 85% code
                    coverage across new modules.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl p-7 border-[.77px] border-[#F3F4F6] shadow-md">
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-[18px] text-[#101828] leading-7 font-semibold capitalize">
                    Web Developer
                  </h1>
                  <h2 className="pt-0.5 text-[14px] text-[#111111] leading-5 font-medium">
                    Freelance · Remote
                  </h2>
                </div>
                <span className="rounded-full py-1.5 px-3 bg-[#F9FAFB] border-[.77px] border-[#E5E7EB] font-medium text-[12px] text-[#4A5565] leading-4 w-fit">
                  Jun 2022 – Dec 2022
                </span>
              </div>
              <div className="pt-4">
                <div className="flex gap-2.5">
                  <MdArrowRight color="#FF5F22" />
                  <p className="text-[14px] text-[#6A7282] leading-5">
                    Built responsive websites and web apps for 8 small business
                    clients.
                  </p>
                </div>
                <div className="flex gap-2.5 pt-2.5">
                  <MdArrowRight color="#FF5F22" />
                  <p className="text-[14px] text-[#6A7282] leading-5">
                    Managed client communication, requirements gathering,
                    scoping, and delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About 5 */}
      <div className="py-20">
        <div className="px-6">
          {/* Heading */}
          <div>
            <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase text-center font-semibold">
              skills
            </p>
            <h1 className="pt-3 text-[30px] text-[#101828] leading-9 text-center font-bold capitalize">
              technical proficiency
            </h1>
            <div className="pt-5 px-[147.12px]">
              <div className="h-1 w-12 rounded-full bg-[#111111] mx-auto"></div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-14">
            <div className="grid grid-rows-6 grid-cols-1 gap-y-8 gap-x-12">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#364153] leading-5 font-medium">
                    React / Next.js
                  </p>
                  <span className="text-[14px] text-[#FF5F22] leading-5 font-semibold">
                    90%
                  </span>
                </div>
                <div className="relative pt-2 h-2.5 w-full bg-[#E5E7EB] rounded-full">
                  <div className="absolute rounded-full h-2.5 w-[90%] bg-[#111111] top-0"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#364153] leading-5 font-medium">
                    TypeScript / Javascript
                  </p>
                  <span className="text-[14px] text-[#FF5F22] leading-5 font-semibold">
                    88%
                  </span>
                </div>
                <div className="relative pt-2 h-2.5 w-full bg-[#E5E7EB] rounded-full">
                  <div className="absolute rounded-full h-2.5 w-[88%] bg-[#111111] top-0"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#364153] leading-5 font-medium">
                    Node.js / Express
                  </p>
                  <span className="text-[14px] text-[#FF5F22] leading-5 font-semibold">
                    82%
                  </span>
                </div>
                <div className="relative pt-2 h-2.5 w-full bg-[#E5E7EB] rounded-full">
                  <div className="absolute rounded-full h-2.5 w-[82%] bg-[#111111] top-0"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#364153] leading-5 font-medium">
                    Python / Django
                  </p>
                  <span className="text-[14px] text-[#FF5F22] leading-5 font-semibold">
                    74%
                  </span>
                </div>
                <div className="relative pt-2 h-2.5 w-full bg-[#E5E7EB] rounded-full">
                  <div className="absolute rounded-full h-2.5 w-[74%] bg-[#111111] top-0"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#364153] leading-5 font-medium">
                    PostgreSQL / MongoDB
                  </p>
                  <span className="text-[14px] text-[#FF5F22] leading-5 font-semibold">
                    80%
                  </span>
                </div>
                <div className="relative pt-2 h-2.5 w-full bg-[#E5E7EB] rounded-full">
                  <div className="absolute rounded-full h-2.5 w-[80%] bg-[#111111] top-0"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#364153] leading-5 font-medium">
                    Docker / AWS
                  </p>
                  <span className="text-[14px] text-[#FF5F22] leading-5 font-semibold">
                    65%
                  </span>
                </div>
                <div className="relative pt-2 h-2.5 w-full bg-[#E5E7EB] rounded-full">
                  <div className="absolute rounded-full h-2.5 w-[65%] bg-[#111111] top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About 6 */}
      <div className="py-20">
        <div className="px-6">
          {/* Heading */}
          <div>
            <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase text-center font-semibold">
              personal
            </p>
            <h1 className="pt-3 text-[30px] text-[#101828] leading-9 text-center font-bold capitalize">
              interest & hobbies
            </h1>
            <div className="pt-5 px-[147.12px]">
              <div className="h-1 w-12 rounded-full bg-[#111111] mx-auto"></div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-14">
            <ul className="flex flex-wrap gap-3 justify-center">
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                Open Source
              </li>
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                UI/UX Design
              </li>
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                Machine Learning
              </li>
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                System Design
              </li>
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                Rock Climbing
              </li>
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                Photography
              </li>
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                Coffee Brewing
              </li>
              <li className="py-2.5 px-5 rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] text-[14px] text-[#364153] font-medium text-center">
                Reading Sci-Fi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

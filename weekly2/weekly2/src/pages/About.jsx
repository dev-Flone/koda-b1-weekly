import { MdArrowRight } from "react-icons/md";
import {
  careerHighlights,
  education,
  interests,
  proficiency,
} from "../data/about";
import SectionHeading from "../components/SectionHeading";

const About = () => (
  <article>
    <header className="border-b-[.77px] border-[#F3F4F6] bg-[#F3F4F6] py-16">
      <SectionHeading
        eyebrow="get to know me"
        title="about alex"
        titleAs="h1"
        titleClassName="text-[36px] font-extrabold leading-10"
        description="A passionate developer who loves building things that make a real difference."
      />
    </header>

    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <img
          src="/images/hero.jpg"
          alt="Alex Carter"
          className="mx-auto h- w-72 rounded-2xl object-cover shadow-md md:h-96 md:w-96 lg:mx-0 lg:h-80"
        />
        <div>
          <h2 className="text-2xl font-bold leading-8 text-[#101828]">
            Building the web, one line at a time.
          </h2>
          <div className="space-y-4 pt-5 text-base leading-relaxed text-[#6A7282]">
            <p>
              I'm Alex Carter, a full-stack software developer based in San
              Francisco, CA. I graduated from UC Berkeley with a B.S. in
              Computer Science in 2023 and have been building web products
              professionally ever since.
            </p>
            <p>
              My stack spans React and TypeScript on the frontend, Node.js and
              Python on the backend, and PostgreSQL and MongoDB for data. I care
              deeply about performance, accessibility, and writing code that my
              future self won't hate.
            </p>
            <p>
              When I'm not coding, you'll find me rock climbing at the local
              gym, experimenting with pour-over coffee, or reading science
              fiction. I'm actively looking for my next challenge.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3 pt-7">
            {["San Francisco, CA", "Open to Roles", "CS, UC Berkeley"].map(
              (item) => (
                <li
                  key={item}
                  className="rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading eyebrow="education" title="academic background" />
        <ol className="relative mx-auto flex max-w-4xl flex-col gap-10 pl-12 pt-14">
          <li
            aria-hidden="true"
            className="absolute bottom-0 left-3.75 top-14 w-px bg-[#E5E7EB]"
          />
          {education.map(({ degree, institution, year, description }) => (
            <li key={degree} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-9.5 top-2 z-10 h-3 w-3 rounded-sm border-2 border-white bg-[#101828] shadow-sm"
              />
              <article className="rounded-xl border-[.77px] border-[#F3F4F6] bg-white p-6 shadow-md">
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-semibold leading-6 text-[#101828]">
                      {degree}
                    </h3>
                    <p className="pt-0.5 text-sm font-medium leading-5 text-[#FF5F22]">
                      {institution}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border-[.77px] border-[#FFF3EE] bg-[#FFF3EE] px-3 py-1 text-xs text-[#FF5F22]">
                    {year}
                  </span>
                </div>
                <p className="pt-2 text-sm leading-[22.75px] text-[#6A7282]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading eyebrow="career" title="work experience" />
        <div className="grid grid-cols-1 gap-6 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {careerHighlights.map(({ title, company, date, highlights }) => (
            <article
              key={title}
              className="rounded-xl border-[.77px] border-[#F3F4F6] p-7 shadow-md"
            >
              <h3 className="text-lg font-semibold capitalize leading-7 text-[#101828]">
                {title}
              </h3>
              <p className="pt-0.5 text-sm font-medium leading-5 text-[#111111]">
                {company}
              </p>
              <span className="mt-3 inline-block w-fit rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1.5 text-xs font-medium leading-4 text-[#4A5565]">
                {date}
              </span>
              <ul className="space-y-2.5 pt-4">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-5 text-[#6A7282]"
                  >
                    <MdArrowRight
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#FF5F22]"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading eyebrow="skills" title="technical proficiency" />
        <ul className="grid grid-cols-1 gap-x-12 gap-y-8 pt-14 md:grid-cols-2">
          {proficiency.map(({ name, score }) => (
            <li key={name}>
              <div className="flex justify-between">
                <span className="text-sm font-medium leading-5 text-[#364153]">
                  {name}
                </span>
                <span className="text-sm font-semibold leading-5 text-[#FF5F22]">
                  {score}%
                </span>
              </div>
              <div
                className="relative mt-2 h-2.5 w-full rounded-full bg-[#E5E7EB]"
                role="progressbar"
                aria-label={name}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={score}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#111111]"
                  style={{ width: `${score}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading eyebrow="personal" title="interests & hobbies" />
        <ul className="flex flex-wrap justify-center gap-3 pt-14">
          {interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] px-5 py-2.5 text-center text-sm font-medium text-[#364153]"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </article>
);

export default About;

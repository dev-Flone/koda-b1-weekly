import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import skillObjects from "../data/skills";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "problem solver",
    description:
      "I enjoy breaking down complex challenges into simple, elegant solutions that scale well over time.",
  },
  {
    title: "team player",
    description:
      "Experienced collaborating with designers, product managers, and engineers in agile environments.",
  },
  {
    title: "lifelong learner",
    description:
      "Always exploring new tools and technologies. Currently deepening my cloud architecture and DevOps skills.",
  },
];

const testimonials = [
  {
    quote:
      "Alex delivered our e-commerce platform ahead of schedule. The code quality was outstanding and the UI exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, BrightShop Inc.",
    image: "/images/person1.jpg",
  },
  {
    quote:
      "Working with Alex was a pleasure. They understood our requirements immediately and brought creative solutions to complex problems.",
    name: "Michael Chen",
    role: "CTO, Velocity Labs",
    image: "/images/person2.jpg",
  },
  {
    quote:
      "Alex transformed our outdated website into a modern, responsive platform. Traffic increased 40% within the first month of launch.",
    name: "Emily Rodriguez",
    role: "Marketing Director, Apex Digital",
    image: "/images/person3.jpg",
  },
];

const featuredProjects = projects.filter(({ featured }) => featured);

const Home = () => (
  <div>
    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="who i am"
          title="a little about me"
          description="I'm passionate about writing clean, maintainable code and crafting experiences that users genuinely enjoy."
        />
        <div className="grid grid-cols-1 gap-6 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ title, description }) => (
            <article
              key={title}
              className="rounded-xl border-[.77px] border-[#F3F4F6] p-7 shadow-md"
            >
              <h3 className="text-lg font-semibold capitalize leading-7 text-[#101828]">
                {title}
              </h3>
              <p className="pt-2 text-sm text-[#6A7282]">{description}</p>
            </article>
          ))}
        </div>
        <Link
          to="/about"
          className="flex justify-center gap-2 pt-10 text-sm font-semibold leading-5"
        >
          Learn more about me <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="technical skills"
          title="what i work with"
          description="A snapshot of the tools and technologies I use to build modern web applications."
        />
        <ul className="flex flex-wrap justify-center gap-2 pt-14">
          {skillObjects.map(({ id, name }) => (
            <li
              key={id}
              className="w-fit rounded-full border-[.77px] border-[#FFF3EE] bg-[#FFF3EE] px-4 py-2 text-sm font-medium leading-5 text-[#FF5F22]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="my work"
          title="featured projects"
          description="A selection of projects that showcase my skills across the full development stack."
        />
        <div className="grid grid-cols-1 gap-7 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <Link
            to="/projects"
            className="rounded-lg bg-[#111111] px-6 py-3 text-white"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="testimonial"
          title="what client say"
          description="Feedback from people I've had the pleasure of working with."
        />
        <div className="grid grid-cols-1 gap-7 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, image }) => (
            <figure
              key={name}
              className="rounded-xl border-[.77px] border-[#F3F4F6] bg-[#F9FAFB] p-7"
            >
              <blockquote className="text-sm italic text-[#4A5565]">
                “{quote}”
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-6">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold leading-5 text-[#101828]">
                    {name}
                  </p>
                  <p className="text-xs leading-4 text-[#6A7282]">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#111111] py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 md:px-8">
        <h2 className="text-center text-3xl font-bold capitalize leading-9 text-white">
          let's work together
        </h2>
        <p className="pb-8 pt-4 text-center text-base leading-6.5 text-[#FFD6A8]">
          I'm currently available for freelance projects and full-time
          opportunities. Let's build something great.
        </p>
        <Link
          to="/contact"
          className="rounded-lg bg-[#FF5F22] px-6 py-3 text-base font-bold leading-6"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  </div>
);

export default Home;

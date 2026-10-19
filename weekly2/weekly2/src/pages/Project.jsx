import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

const projectTypes = ["All", "Frontend", "Backend", "Fullstack"];

const ProjectActions = () => (
  <>
    <button
      type="button"
      className="w-full cursor-pointer rounded-lg border-[.77px] border-[#E5E7EB] py-2.5 text-center text-sm font-medium text-[#364153]"
    >
      GitHub
    </button>
    <button
      type="button"
      className="w-full cursor-pointer rounded-lg bg-[#111111] p-2.5 text-center text-sm font-medium leading-5 text-white"
    >
      Live Demo
    </button>
  </>
);

const Project = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <article>
      <section className="border-[.77px] border-[#F3F4F6] bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <SectionHeading
            eyebrow="portfolio"
            title="my projects"
            titleAs="h1"
            titleClassName="text-[36px] font-extrabold leading-10"
            description="A collection of work that demonstrates my skills across the full development stack."
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div
            role="group"
            aria-label="Filter projects by type"
            className="flex flex-wrap justify-center gap-3"
          >
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                aria-pressed={selectedType === type}
                className={`cursor-pointer rounded-full border-[.77px] px-5 py-2.5 text-center text-sm font-medium leading-5 ${selectedType === type ? "border-[#111111] bg-[#111111] text-white" : "border-[#E5E7EB] bg-white text-[#4A5565]"}`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-7 pt-12 md:grid-cols-1 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                showType
                actions={<ProjectActions />}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Project;

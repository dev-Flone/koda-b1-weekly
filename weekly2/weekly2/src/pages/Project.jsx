import { useState } from "react";
import projects from "../data/projects";

const Project = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredType =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);
  return (
    <article>
      {/* Section 1 */}
      <section className="py-16 border-[.77px] border-[#F3F4F6] bg-[#F9FAFB]">
        <div className="px-6">
          <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] text-center uppercase font-semibold">
            portfolio
          </p>
          <h1 className="pt-3 text-[36px] text-[#101828] leading-10 text-center font-extrabold capitalize">
            my projects
          </h1>
          <p className="pt-4 text-[16px] text-[#6A7282] text-center">
            A collection of work that demonstrates my skills across the full
            development stack.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-white">
        <div className="px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", "Frontend", "Backend", "Fullstack"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2.5 rounded-full border-[.77px] text-[14px] leading-5 text-center font-medium cursor-pointer ${selectedType === type ? "bg-[#111111] text-white  border-[#111111] " : "bg-[#FFFFFF] border-[#E5E7EB] text-[#4A5565] "}`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="pt-12">
            <div className="grid gap-7">
              {filteredType.map((project) => (
                <div
                  key={project.id}
                  className="border-[.77px] border-[#F3F4F6] shadow-md rounded-xl bg-white"
                >
                  <div>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-48 rounded-t-xl"
                      />
                    ) : (
                      <div className="h-48 bg-[#F3F4F6]"></div>
                    )}
                  </div>
                  <div className="p-7">
                    <div className="flex justify-between items-center">
                      <h1 className="pb-3 text-[18px] text-[#101828] leading-7 font-semibold">
                        {project.name}
                      </h1>
                      <span className="py-1 px-2.5 bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] rounded-full text-[12px] text-[#FF5F22] leading-4">
                        {project.type}
                      </span>
                    </div>
                    <p className="pb-4 text-[14px] text-[#6A7282] leading-[22.75px]">
                      {project.description}
                    </p>
                    <div className="pb-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span className="py-1 px-2.5 border-[.77px] border-[#F9FAFB] bg-[#F9FAFB] rounded-full text-[12px] text-[#4A5565] leading-4 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 grow">
                      <button
                        type="button"
                        className="w-full rounded-lg border-[.77px] border-[#E5E7EB] py-2.5 text-[14px] text-[#364153] text-center font-medium cursor-pointer"
                      >
                        GitHub
                      </button>
                      <button
                        type="button"
                        className="w-full p-2.5 rounded-lg bg-[#111111] text-[#FFFFFF] text-[14px] font-medium text-center leading-5 cursor-pointer"
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Project;

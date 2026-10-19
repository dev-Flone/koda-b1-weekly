const ProjectCard = ({ project, showType = false, actions = null }) => (
  <article className="overflow-hidden rounded-xl border-[.77px] border-[#F3F4F6] bg-white shadow-md">
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.name} project preview`}
        className="h-48 w-full object-cover"
        loading="lazy"
      />
    ) : (
      <div
        role="img"
        aria-label={`${project.name} project preview unavailable`}
        className="h-48 bg-[#F3F4F6]"
      />
    )}
    <div className="p-7">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold leading-7 text-[#101828]">
          {project.name}
        </h3>
        {showType && (
          <span className="rounded-full border-[.77px] border-[#FFF3EE] bg-[#FFF3EE] px-2.5 py-1 text-xs leading-4 text-[#FF5F22]">
            {project.type}
          </span>
        )}
      </div>
      <p className="pt-1 text-sm leading-[22.75px] text-[#6A7282]">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2 pt-4">
        {project.tools.map((tool) => (
          <li
            key={tool}
            className="rounded-full border-[.77px] border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-1 text-xs font-medium leading-4 text-[#4A5565]"
          >
            {tool}
          </li>
        ))}
      </ul>
      {actions && <div className="flex gap-3 pt-5">{actions}</div>}
    </div>
  </article>
);

export default ProjectCard;

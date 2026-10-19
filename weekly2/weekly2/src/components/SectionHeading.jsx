const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  titleAs: Title = "h2",
  titleClassName = "",
  showRule = true,
  className = "",
}) => {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase leading-4 tracking-[1.2px] text-[#FF5F22]">
          {eyebrow}
        </p>
      )}
      <Title
        className={`pt-3 text-3xl font-bold leading-9 capitalize text-[#101828] ${titleClassName}`}
      >
        {title}
      </Title>
      {description && (
        <p className="pt-4 text-base leading-6 text-[#6A7282]">
          {description}
        </p>
      )}
      {showRule && (
        <div
          aria-hidden="true"
          className={`${align === "center" ? "mx-auto" : ""} mt-5 h-1 w-12 rounded-full bg-[#111111]`}
        />
      )}
    </div>
  );
};

export default SectionHeading;

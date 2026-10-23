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
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Title className={`title capitalize ${titleClassName}`}>{title}</Title>
      {description && <p className="description">{description}</p>}
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

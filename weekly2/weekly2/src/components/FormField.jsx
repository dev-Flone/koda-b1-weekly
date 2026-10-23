const FormField = ({
  label,
  name,
  register,
  error,
  required = false,
  as: Control = "input",
  className = "",
  onlyNumbers = false,
  ...controlProps
}) => {
  const errorId = `${name}-error`;
  const registration = register(name);
  const handleChange = (e) => {
    if (onlyNumbers) {
      e.target.value = e.target.value.replace(/\D/g, "");
    }
    registration.onChange(e);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="pb-1.5 text-sm font-medium leading-5 text-[#111111]"
      >
        {label}{" "}
        {required && (
          <span aria-hidden="true" className="font-medium text-[#FF6467]">
            *
          </span>
        )}
      </label>
      <Control
        id={name}
        required={required}
        onChange={handleChange}
        {...register(name)}
        {...controlProps}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`rounded-lg border-[.77px] border-[#E5E7EB] px-4 py-3 text-sm leading-5 text-[#111111] ${className}`}
      />
      {error?.message && (
        <p id={errorId} role="alert" className="pt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormField;

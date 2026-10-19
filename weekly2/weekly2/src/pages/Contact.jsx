import { yupResolver } from "@hookform/resolvers/yup";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "../components/FormField";
import SectionHeading from "../components/SectionHeading";
import { formSchema } from "../utils/formSchema";

const contactMethods = [
  { id: "contact-email", label: "Email", value: "email" },
  { id: "contact-phone", label: "Phone", value: "phone" },
  { id: "contact-whatsapp", label: "Whatsapp", value: "whatsapp" },
];

const technologyOptions = [
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "React Native",
  "Vue.js",
  "Django",
  "Express.js",
];

const contactDetails = [
  { icon: "📍", label: "Location", value: "San Francisco, CA 94105" },
  { icon: "✉️", label: "Email", value: "alex.carter@email.com", accent: true },
  { icon: "📞", label: "Phone", value: "+1 (415) 555-0192" },
  { icon: "🕒", label: "Hours", value: "Mon – Fri, 9 AM – 6 PM PST" },
];

const socialProfiles = [
  { network: "GitHub", handle: "@alexcarter" },
  { network: "LinkedIn", handle: "Alex Carter" },
  { network: "Twitter", handle: "@alexcodes" },
  { network: "Dev.To", handle: "@alexcarter" },
];

const defaultValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  country: "",
  message: "",
  contactMethod: "",
  technologies: [],
};

const Contact = () => {
  const [notice, setNotice] = useState({
    type: "",
    text: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
    defaultValues,
  });

  function onValid() {
    setNotice({
      type: "success",
      text: "Your message is ready to send.",
    });
    reset();
  }

  function onInvalid() {
    setNotice({
      type: "error",
      text: "Please correct the highlighted fields and try again.",
    });
  }

  function onReset() {
    reset();
    setNotice({ type: "", text: "" });
  }
  return (
    <article>
      {/* Heading */}
      <section className="border-[.77px] border-[#F3F4F6] bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeading
            eyebrow="get in touch"
            title="contact me"
            titleAs="h1"
            titleClassName="text-[36px] font-extrabold leading-10"
            showRule={false}
            description="Have a project in mind or just want to say hello? Fill out the form and I'll get back to you within 24 hours."
          />
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-12">
          {/* Form */}
          <form noValidate onSubmit={handleSubmit(onValid, onInvalid)}>
            <h2 className="text-[20px] text-[#101828] leading-7 font-bold">
              Send a Message
            </h2>
            {notice.text && (
              <p
                role={notice.type === "error" ? "alert" : "status"}
                className={`pt-4 text-sm ${notice.type === "error" ? "text-red-600" : "text-green-700"}`}
              >
                {notice.text}
              </p>
            )}
            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-5 pt-7 md:grid-cols-2">
              <FormField
                label="Full Name"
                name="fullName"
                register={register}
                error={errors.fullName}
                required
                autoComplete="name"
                placeholder="Jordan Smith"
              />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                register={register}
                error={errors.email}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone Number & Subject */}
            <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                register={register}
                autoComplete="tel"
                placeholder="+1 (415) 555-0100"
              />
              <FormField
                label="Subject"
                name="subject"
                register={register}
                error={errors.subject}
                required
                placeholder="Project Inquiry"
              />
            </div>

            {/* Country and Message */}
            <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
              <FormField
                label="Country"
                name="country"
                register={register}
                autoComplete="country-name"
              />
              <FormField
                as="textarea"
                label="Message"
                name="message"
                register={register}
                error={errors.message}
                required
                rows={5}
                placeholder="Tell me about your project or what you need help with..."
                className="resize-none"
              />
            </div>

            {/* Contact Method */}
            <div className="pt-6">
              <p className="text-[14px] font-medium leading-5 text-[#364153]">
                Preferred Contact Method
              </p>
              <div className="flex gap-6">
                {contactMethods.map(({ id, label, value }) => (
                  <div key={id} className="flex gap-2.5">
                    <input
                      type="radio"
                      id={id}
                      {...register("contactMethod")}
                      value={value}
                      className="accent-[#FF5F22]"
                    />
                    <label htmlFor={id}>{label}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div className="pt-6">
              <p className="text-[14px] text-[#364153] leading-5 font-medium">
                Technologies Interested In
              </p>
              <div className="pt-1.5 grid grid-rows-4 grid-cols-2 gap-3">
                {technologyOptions.map((technology) => {
                  const id = `technology-${technology
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`;

                  return (
                    <div key={technology} className="flex gap-2.5">
                      <input
                        id={id}
                        type="checkbox"
                        value={technology}
                        {...register("technologies")}
                      />
                      <label
                        htmlFor={id}
                        className="text-[14px] leading-5 text-[#4A5565]"
                      >
                        {technology}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Button */}
            <div className="pt-8 md:flex gap-4">
              <button
                type="submit"
                className="bg-[#111111] py-3 px-8 text-[16px] text-white leading-6 text-center font-semibold w-fit rounded-lg mt-4 cursor-pointer"
              >
                Send Messages
              </button>
              <button
                type="button"
                onClick={onReset}
                className="border-[.77px] border-[#E5E7EB] py-3 px-8 text-[16px] text-[#4A5565] leading-6 text-center font-semibold w-fit rounded-lg mt-4 cursor-pointer"
              >
                Reset Form
              </button>
            </div>
          </form>

          {/* Information */}
          <aside className="space-y-6">
            <section className="border-[.77px] border-[#F3F4F6] bg-[#F9FAFB] p-6">
              <h2 className="text-base font-semibold leading-6 text-[#101828]">
                Office Information
              </h2>
              <dl className="space-y-4 pt-5">
                {contactDetails.map(({ icon, label, value, accent }) => (
                  <div key={label} className="flex gap-3">
                    <span aria-hidden="true" className="pt-0.5 text-base">
                      {icon}
                    </span>
                    <div>
                      <dt className="text-sm font-medium leading-5 text-[#364153]">
                        {label}
                      </dt>
                      <dd
                        className={`text-sm leading-5 ${accent ? "text-[#FF5F22]" : "text-[#6A7282]"}`}
                      >
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </section>

            <section className="border-[.77px] border-[#F3F4F6] bg-[#F9FAFB] p-6">
              <h2 className="text-base font-semibold leading-6 text-[#101828]">
                Find Me Online
              </h2>
              <ul className="pt-4">
                {socialProfiles.map(({ network, handle }) => (
                  <li
                    key={network}
                    className="flex justify-between border-b-[.77px] border-[#F3F4F6] py-3 text-sm leading-5 last:border-b-0"
                  >
                    <span className="font-medium text-[#364153]">
                      {network}
                    </span>
                    <span className="text-xs text-[#99A1AF]">{handle} →</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex h-48 flex-col items-center justify-center rounded-xl border-[.77px] border-[#F3F4F6] bg-[#FFF7ED] px-4">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] shadow-md">
                <MapPin aria-hidden="true" color="white" size={16} />
              </div>
              <p className="text-center text-sm font-semibold leading-5 text-[#FF5F22]">
                San Francisco, CA
              </p>
              <p className="pt-0.5 text-center text-xs leading-4 text-[#FF5F22B2]">
                United States
              </p>
              <p className="pt-3 text-center text-xs leading-4 text-[#FFB86A]">
                37.7749° N, 122.4194° W
              </p>
            </section>
          </aside>
        </div>
      </section>
    </article>
  );
};

export default Contact;

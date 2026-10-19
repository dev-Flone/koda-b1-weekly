import { ArrowDownToLine } from "lucide-react";
import experiences from "../data/experience";
import certificates from "../data/certificates";
import awards from "../data/awards";
import SectionHeading from "../components/SectionHeading";

const Experience = () => {
  return (
    <article>
      {/* Section 1 */}
      <section className="py-16 border-b-[.77px] border-[#F3F4F6] bg-[#F9FAFB]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 md:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <SectionHeading
            eyebrow="career history"
            title="experience"
            titleAs="h1"
            titleClassName="text-[36px] font-extrabold leading-10"
            description="My professional journey, credentials, and recognition."
            align="left"
          />
          <button className="py-4 px-6 flex gap-2 bg-[#111111] text-[16px] text-white leading-6 font-semibold rounded-lg w-fit cursor-pointer">
            <ArrowDownToLine /> Download Resume
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        {/* Experience */}
        <div>
          {/* Heading */}
          <SectionHeading
            eyebrow="work history"
            title="professional experience"
            align="left"
            className="max-w-none"
            titleClassName="pt-2 text-2xl leading-8"
          />

          {/* Content */}
          <div className="pt-10">
            <table className="rounded-xl bg-white border-[.77px] border-[#F3F4F6] shadow-sm w-full overflow-hidden">
              <thead className="bg-[#111111]">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-2.5 text-left text-sm font-semibold leading-5 text-white"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-2.5 text-left text-sm font-semibold leading-5 text-white"
                  >
                    Position
                  </th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((exp) => (
                  <tr key={exp.id}>
                    <td className="px-5 py-2.5 text-[14px] text-[#101828] leading-5 font-medium">
                      {exp.company}
                    </td>
                    <td className="px-5 py-2.5 text-[14px] text-[#4A5565]">
                      {exp.position}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Credential */}
        <div className="pt-16">
          {/* Heading */}
          <SectionHeading
            eyebrow="credentials"
            title="certifications"
            align="left"
            className="max-w-none"
            titleClassName="pt-2 text-2xl leading-8"
          />

          {/* Content */}
          <div className="pt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
              {certificates.map((certi) => (
                <div
                  key={certi.id}
                  className="p-6 flex gap-4 border-[.77px] border-[#F3F4F6] bg-white shadow-sm rounded-xl"
                >
                  <div className="flex justify-center items-center w-12 h-12 bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] rounded-xl text-[12px] text-[#FF5F22] font-bold leading-4">
                    {certi.short}
                  </div>
                  <div>
                    <h3 className="text-[14px] text-[#101828] leading-5 font-semibold">
                      {certi.name}
                    </h3>
                    <p className="pt-1 text-[12px] text-[#FF5F22] leading-4 font-medium">
                      {certi.company}
                    </p>
                    <span className="pt-1 text-[12px] text-[#99A1AF] leading-4">
                      {certi.validDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="pt-16">
          {/* Heading */}
          <SectionHeading
            eyebrow="recognition"
            title="awards & honor"
            align="left"
            className="max-w-none"
            titleClassName="pt-2 text-2xl leading-8"
          />

          {/* Content */}
          <div className="pt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="rounded-xl p-6 bg-white border-[.77px] border-[#F3F4F6] shadow-md"
                >
                  <div className="flex justify-between">
                    <h3 className="text-[16px] text-[#101828] leading-6 font-semibold">
                      {award.name}
                    </h3>
                    <span className="text-[12px] text-[#99A1AF] leading-4 font-medium">
                      {award.date}
                    </span>
                  </div>
                  <p className="pt-2 text-[12px] text-[#FF5F22] leading-4 font-semibold">
                    {award.company}
                  </p>
                  <p className="pt-3 text-[14px] text-[#6A7282] leading-[22.75px]">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Experience;

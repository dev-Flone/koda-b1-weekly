import { ArrowDownToLine } from "lucide-react";
import experiences from "../data/experience";
import certificates from "../data/certificates";
import awards from "../data/awards";

const Experience = () => {
  return (
    <article>
      {/* Section 1 */}
      <section className="py-16 border-b-[.77px] border-[#F3F4F6] bg-[#F9FAFB]">
        <div className="px-6 flex flex-col gap-5">
          <div>
            <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px]  uppercase font-semibold">
              career history
            </p>
            <h1 className="pt-3 text-[36px] text-[#101828] leading-10  font-extrabold capitalize">
              experience
            </h1>
            <p className="pt-4 text-[16px] text-[#6A7282] ">
              My professional journey, credentials, and recognition.
            </p>
          </div>
          <button className="py-4 px-6 flex gap-2 bg-[#111111] text-[16px] text-white leading-6 font-semibold rounded-lg w-fit cursor-pointer">
            <ArrowDownToLine /> Download Resume
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6">
        {/* Experience */}
        <div>
          {/* Heading */}
          <div>
            <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase font-semibold">
              work history
            </p>
            <h1 className="pt-2 text-[24px] text-[#101828] leading-8 capitalize font-bold">
              professional experience
            </h1>
            <div className=" pt-4 ">
              <div className="h-1 w-10 rounded-full bg-[#111111]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-10">
            <table className="rounded-xl bg-white border-[.77px] border-[#F3F4F6] shadow-sm w-full overflow-hidden">
              <thead className="bg-[#111111] ">
                <th className="text-[14px] text-white leading-5 font-semibold px-5 py-2.5">
                  Company
                </th>
                <th className="text-[14px] text-white leading-5 font-semibold px-5 py-2.5">
                  Position
                </th>
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
          <div>
            <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase font-semibold">
              credentials
            </p>
            <h1 className="pt-2 text-[24px] text-[#101828] leading-8 capitalize font-bold">
              certifications
            </h1>
            <div className=" pt-4 ">
              <div className="h-1 w-10 rounded-full bg-[#111111]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-10">
            <div className="grid gap-6">
              {certificates.map((certi) => (
                <div
                  key={certi.id}
                  className="p-6 flex gap-4 border-[.77px] border-[#F3F4F6] bg-white shadow-sm rounded-xl"
                >
                  <div className="flex justify-center items-center w-12 h-12 bg-[#FFF3EE] border-[.77px] border-[#FFF3EE] rounded-xl text-[12px] text-[#FF5F22] font-bold leading-4">
                    {certi.short}
                  </div>
                  <div>
                    <h1 className="text-[14px] text-[#101828] leading-5 font-semibold">
                      {certi.name}
                    </h1>
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
          <div>
            <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] uppercase font-semibold">
              recognition
            </p>
            <h1 className="pt-2 text-[24px] text-[#101828] leading-8 capitalize font-bold">
              awards & honor
            </h1>
            <div className=" pt-4 ">
              <div className="h-1 w-10 rounded-full bg-[#111111]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-10">
            <div className="grid gap-6">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="rounded-xl p-6 bg-white border-[.77px] border-[#F3F4F6] shadow-md"
                >
                  <div className="flex justify-between">
                    <h1 className="text-[16px] text-[#101828] leading-6 font-semibold">
                      {award.name}
                    </h1>
                    <span className="text-[12px] text-[#99A1AF] leading-4 font-medium">
                      {award.date}
                    </span>
                  </div>
                  <h1 className="pt-2 text-[12px] text-[#FF5F22] leading-4 font-semibold">
                    {award.company}
                  </h1>
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

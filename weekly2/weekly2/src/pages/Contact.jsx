import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <article>
      {/* Heading */}
      <section className="py-16 bg-[#F9FAFB] border-[.77px] border-[#F3F4F6]">
        <div className="px-6">
          <p className="text-[12px] text-[#FF5F22] leading-4 tracking-[1.2px] text-center uppercase font-semibold">
            get in touch
          </p>
          <h1 className="pt-3 text-[36px] text-[#101828] leading-10 text-center font-extrabold capitalize">
            contact me
          </h1>
          <p className="pt-4 text-[16px] text-[#6A7282] leading-6 text-center">
            Have a project in mind or just want to say hello? Fill out the form
            and I'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16">
        <div className="grid px-6 gap-12">
          {/* Form */}
          <form action="">
            <h1 className="text-[20px] text-[#101828] leading-7 font-bold">
              Send a Message
            </h1>
            {/* Name & Email */}
            <div className="pt-7 flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 font-medium pb-1.5"
                >
                  Full Name{" "}
                  <span className="text-[14px] text-[#FF6467] font-medium leading-5 ">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Jordan Smith"
                  className="py-3 px-4 border-[.77px] border-[#E5E7EB] rounded-lg text-[14px] text-[#99A1AF] leading-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 font-medium pb-1.5"
                >
                  Email Address{" "}
                  <span className="text-[14px] text-[#FF6467] font-medium leading-5 ">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="you@example.com"
                  className="py-3 px-4 border-[.77px] border-[#E5E7EB] rounded-lg text-[14px] text-[#99A1AF] leading-5"
                />
              </div>
            </div>

            {/* Phone Number & Subject */}
            <div className="pt-5 flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 font-medium pb-1.5"
                >
                  Phone Number{" "}
                </label>
                <input
                  type="text"
                  placeholder="+1 (415) 555-0100"
                  className="py-3 px-4 border-[.77px] border-[#E5E7EB] rounded-lg text-[14px] text-[#99A1AF] leading-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 font-medium pb-1.5"
                >
                  Subject{" "}
                  <span className="text-[14px] text-[#FF6467] font-medium leading-5 ">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="py-3 px-4 border-[.77px] border-[#E5E7EB] rounded-lg text-[14px] text-[#99A1AF] leading-5"
                />
              </div>
            </div>

            {/* Country and Message */}
            <div className="pt-5 flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 font-medium pb-1.5"
                >
                  Country{" "}
                </label>
                <input
                  type="text"
                  className="py-3 px-4 border-[.77px] border-[#E5E7EB] rounded-lg text-[14px] text-[#99A1AF] leading-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] leading-5 font-medium pb-1.5"
                >
                  Message{" "}
                  <span className="text-[14px] text-[#FF6467] font-medium leading-5 ">
                    *
                  </span>
                </label>
                <textarea
                  type="text"
                  rows={5}
                  placeholder="Tell me about your project or what you need help with..."
                  className="py-3 px-4 border-[.77px] border-[#E5E7EB] rounded-lg text-[14px] text-[#99A1AF] leading-5 resize-none"
                />
              </div>
            </div>

            {/* Contact Method */}
            <div className="pt-6">
              <p
                htmlFor=""
                className="text-[14px] text-[#364153] leading-5 font-medium"
              >
                Preferred Contact Method
              </p>
              <div className="flex gap-6">
                <div className="flex gap-2.5">
                  <input
                    type="radio"
                    id="email"
                    name="contact"
                    value="email"
                    className="accent-[#FF5F22]"
                  />
                  <label for="email">Email</label>
                </div>
                <div className="flex gap-2.5">
                  <input
                    type="radio"
                    id="phone"
                    name="contact"
                    value="phone"
                    className="accent-[#FF5F22]"
                  />
                  <label for="phone">Phone</label>
                </div>
                <div className="flex gap-2.5">
                  <input
                    type="radio"
                    id="whatsapp"
                    name="contact"
                    value="whatsapp"
                    className="accent-[#FF5F22]"
                  />
                  <label for="whatsapp">Whatsapp</label>
                </div>
              </div>
            </div>

            {/* Tech */}
            <div className="pt-6">
              <p className="text-[14px] text-[#364153] leading-5 font-medium">
                Technologies Interested In
              </p>
              <div className="pt-1.5 grid grid-rows-4 grid-cols-2 gap-3">
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    React
                  </label>
                </div>
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    Node.js
                  </label>
                </div>
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    Python
                  </label>
                </div>
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    TypeScript
                  </label>
                </div>
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    React Native
                  </label>
                </div>
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    Vue.js
                  </label>
                </div>
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    Django
                  </label>
                </div>
                <div className="flex gap-2.5">
                  <input type="checkbox" />
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#4A5565] leading-5"
                  >
                    Express.js
                  </label>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="bg-[#111111] py-3 px-8 rounded-lg text-[16px] text-white leading-6 font-semibold text-center w-fit cursor-pointer"
              >
                Send Messages
              </button>
              <br />
              <button
                type="button"
                className="border-[.77px] border-[#E5E7EB] py-3 px-8 text-[16px] text-[#4A5565] leading-6 text-center font-semibold w-fit rounded-lg mt-4 cursor-pointer"
              >
                Reset Form
              </button>
            </div>
          </form>

          {/* Information */}
          <div className="">
            <div className="p-6 border-[.77px] border-[#F3F4F6] bg-[#F9FAFB]">
              <h1 className="text-[16px] text-[#101828] leading-6 font-semibold">
                Office Information
              </h1>
              <div className="pt-5">
                <div className="flex gap-3">
                  <div className="pt-0.5 text-[16px] text-[#0F172A]">📍</div>
                  <div className="flex flex-col">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      Location
                    </p>
                    <p className="text-[14px] text-[#6A7282] leading-5">
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <div className="pt-0.5 text-[16px] text-[#0F172A]">✉️</div>
                  <div className="flex flex-col">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      Email
                    </p>
                    <p className="text-[14px] text-[#FF5F22] leading-5">
                      alex.carter@email.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <div className="pt-0.5 text-[16px] text-[#0F172A]">📞</div>
                  <div className="flex flex-col">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      Phone
                    </p>
                    <p className="text-[14px] text-[#6A7282] leading-5">
                      +1 (415) 555-0192
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <div className="pt-0.5 text-[16px] text-[#0F172A]">🕒</div>
                  <div className="flex flex-col">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      Hours
                    </p>
                    <p className="text-[14px] text-[#6A7282] leading-5">
                      Mon – Fri, 9 AM – 6 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Find Me */}
            <div className="pt-6">
              <div className="bg-[#F9FAFB] border-[.77px] border-[#F3F4F6] p-6">
                <h1 className="text-[16px] text-[#101828] leading-6 font-semibold">
                  Find Me Online
                </h1>
                <div className="flex flex-col pt-4">
                  <div className="flex justify-between border-b-[.77px] border-[#F3F4F6] ">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      GitHub
                    </p>
                    <span className="text-[12px] flex items-center text-[#99A1AF] leading-4">
                      @alexcarter →
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[.77px] border-[#F3F4F6] pt-3">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      LinkedIn
                    </p>
                    <span className="text-[12px] flex items-center text-[#99A1AF] leading-4">
                      Alex Carter →
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[.77px] border-[#F3F4F6] pt-3">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      Twitter
                    </p>
                    <span className="text-[12px] flex items-center text-[#99A1AF] leading-4">
                      @alexcodes →
                    </span>
                  </div>
                  <div className="flex justify-between border-b-[.77px] border-[#F3F4F6] pt-6">
                    <p className="text-[14px] text-[#364153] leading-5 font-medium">
                      Dev.To
                    </p>
                    <span className="text-[12px] flex items-center text-[#99A1AF] leading-4">
                      @alexcarter →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="pt-6">
              <div className="bg-[#FFF7ED] border-[.77px] border-[#F3F4F6] px-4 rounded-xl flex flex-col items-center justify-center h-48">
                <div className="pb-3">
                  <div className="rounded-full w-8 h-8 bg-[#111111] shadow-md flex flex-col items-center justify-center">
                    <MapPin color="white" size={16} />
                  </div>
                </div>
                <p className="text-[14px] text-[#FF5F22] leading-5 text-center font-semibold">
                  San Francisco, CA
                </p>
                <p className="pt-0.5 text-[12px] text-[#FF5F22B2] text-center leading-4">
                  United States
                </p>
                <p className="pt-3 text-[12px] leading-4 text-[#FFB86A] text-center">
                  37.7749° N, 122.4194° W
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Contact;

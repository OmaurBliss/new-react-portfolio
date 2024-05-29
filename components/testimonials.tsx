import Image from "next/image";

import TestimonialImage01 from "@/public/images/concordlogo.png";
import TestimonialImage02 from "@/public/images/mylestonellclogo.png";
import TestimonialImage03 from "@/public/images/lifetimelogo.png";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Employment History</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage01}
                    width={48}
                    height={48}
                    alt="Testimonial 01"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Software Engineer Consultant
                <br />
                Concord USA Hopkins, MN
                <br />
                Dec 2021 - Apr 2024
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">
                  For More Information
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/omaur-bliss-software-developer/"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage02}
                    width={58}
                    height={58}
                    alt="Testimonial 02"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Software Engineer Consultant
                <br />
                Mylestone LLC
                <br />
                Feb 2020 - Jul 2021
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">
                  For More Information
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/omaur-bliss-software-developer/"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage03}
                    width={58}
                    height={58}
                    alt="Testimonial 03"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Exclusive Life Time Instructor (Group FItness Coach)
                <br />
                Chanhassen, MN
                <br />
                June 2010 - present
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">
                  For More Information
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/omaur-bliss-software-developer/"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import ReactLogoImage from "@/public/images/js_react js_logo_react_react native_icon.png";
import HtmlLogoImage from "@/public/images/code_html_icon.png";
import Css3Logo from "@/public/images/badge_css_css3_achievement_award_icon.png";
import JavaScriptLogo from "@/public/images/avascript_language_icon.png";
import NodeLogo from "@/public/images/logo_node_icon.png";
import JavaLogo from "@/public/images/java_logo-icon.png";
export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-400">
              During the last 7 years, I have gained wisdom and insight into a
              broad range of technologies below is a small sample.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image alt="react logo" src={ReactLogoImage}></Image>
              <h4 className="h4 mb-2">React</h4>
              <p className="text-lg text-gray-400 text-center"></p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image alt="react logo" src={HtmlLogoImage}></Image>
              <h4 className="h4 mb-2">HTML</h4>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                width="400"
                style={{ margin: "20" }}
                height="400"
                alt="react logo"
                src={Css3Logo}
              ></Image>
              <h4 className="h4 mb-2">CSS3</h4>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                width="400"
                style={{ margin: "20" }}
                height="400"
                alt="react logo"
                src={JavaScriptLogo}
              ></Image>

              <h4 className="h4 mb-2">JavaScript</h4>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                width="400"
                style={{ margin: "20" }}
                height="400"
                alt="react logo"
                src={NodeLogo}
              ></Image>

              <h4 className="h4 mb-2">Node</h4>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                width="400"
                style={{ margin: "20" }}
                height="400"
                alt="react logo"
                src={JavaLogo}
              ></Image>
              <h4 className="h4 mb-2">Java</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

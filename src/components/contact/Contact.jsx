import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Address from "./Address";

const addressData = [
  {
    icon: faLinkedin,
    title: "LinkedIn Id",
    description: "akshat-rastogi14",
  },
  {
    icon: faGithub,
    title: "GitHub Id",
    description: "Akshat-1407",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "akshat.rastogi1407@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+91 9084891149",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div className="w-full">
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238]">
                Connect With Me
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>
            </div>
            <div className="my-8.75 sm:max-xl:flex xl:flex items-center justify-between">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

          </div>

          <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
            Let’s discuss your Project
          </p>
        </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/akshat-rastogi14/"
              className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
            >
              Let's Connect
              <FontAwesomeIcon
                icon={faArrowRight}
                size="l"
                style={{ color: "#FFFFFF" }}
                className="ms-3"
              />
            </a>

          </div>
      </div>
    </div>
  );
};

export default Contact;

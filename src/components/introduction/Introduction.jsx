import profile1 from "../../assets/images/profile-images/profile.jpeg";
import "./introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-5 lg:pt-30 lg:pb-45 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-5 me-31.5 px-7c w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Akshat Rastogi
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a web developer specializing in the MERN stack to create functional, scalable websites. 
            I'm passionate about clean code and modern design, and I'm currently open to connecting for 
            freelance projects or professional networking.
          </p>

          <div className="mt-10 mb-10">

            <p className="text-center lg:text-start">
              <a
                className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 border-picto-primary bg-white duration-300 transition-all text-picto-primary text-xs xxs:text-[14px] sm:text-[16px] hover:bg-picto-primary hover:text-white`}
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </p>
          </div>

        </div>

      </div>
      <div className={`max-w-134 w-full h-100 max-lg:mx-auto aspect-[536/636] relative`}>
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={profile1}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;

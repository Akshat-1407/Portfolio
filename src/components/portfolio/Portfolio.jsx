import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Web Devlepoment",
    title: "Echo Chat",
    description:
      "A real-time React and Firebase chat app featuring secure authentication and instant messaging. It leverages Firestore’s live listeners to deliver a seamless, low-latency social experience with modern UI components.",
    link: "https://github.com/Akshat-1407/EchoChat",
  },
  {
    id: 2,
    image: card2,
    category: "Web Devlopment",
    title: "AirBnb Clone",
    description:
      "A full-stack CRUD application built with EJS and Express, utilizing MongoDB as database. It handles everything from server-side rendering to RESTful routing, demonstrating a complete end-to-end web architecture.",
    link: "https://github.com/Akshat-1407/AirBnb",
  },
  {
    id: 3,
    image: card3,
    category: "Web Development",
    title: "Video Player",
    description:
      "A lightweight, media player built with vanilla CSS and JavaScript. This project showcases clean DOM manipulation and precise control over browser-native multimedia elements without external dependencies.",
    link: "https://github.com/Akshat-1407/Web-Development/tree/main/Projects/Project%20(VLC)",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

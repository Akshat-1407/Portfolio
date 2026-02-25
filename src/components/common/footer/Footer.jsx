import { Link } from "react-scroll";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "About", url: "introduction" },
  { id: 2, name: "Process", url: "work-process" },
  { id: 3, name: "Portfolio", url: "portfolio" },
  { id: 4, name: "Services", url: "services" },
  { id: 5, name: "Contact", url: "contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-33 content max-2xl:px-3 flex-wrap:wrap justify-between  ">
      <div className="flex max-md:flex-col justify-center mx-0 items-center h-full w-full text-neutral-200">
        <div className="mx-7 max-md:my-7 text-center pb-5">
          {navItems.map((item) => (
            <Link
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              to={item.url.toLowerCase()}
              smooth={true}
              duration={1000}
              spy={true}
              offset={-140}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-[16px] sm:text-[16px] text-white">
       <center>Copyright &copy; {copyrightYear}</center> 
      </div>
      <div  className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-5">
        Developed with ❤️ by Akshat Rastogi
      </div>
    </div>
  );
};

export default Footer;

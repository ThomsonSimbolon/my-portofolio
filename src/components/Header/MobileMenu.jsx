import { Link } from "react-scroll";
import { BiRightArrowAlt } from "react-icons/bi";
import { navLinks } from "../../data";

const MobileMenu = ({ onItemClick, onContactClick }) => {
  return (
    <div className="lg:hidden bg-gray-950 top-0">
      <ul className="flex flex-col items-center py-4  border-t border-gray-800">
        {navLinks.map((link) => (
          <li className="w-full text-start" key={link.id}>
            <Link
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white text-gray-400 opacity-1"
              className="block py-2 px-4 transition-colors text-gray-400"
              onClick={onItemClick}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center border-t border-gray-800 p-4 bg-gray-950">
        <a
          href="#contact"
          onClick={onContactClick}
          className="flex justify-center items-center text-center font-medium rounded-full w-56 md:w-full text-sm gap-x-1 md:p-3 p-2 bg-slate-900 text-white hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400"
        >
          Contact Us
          <span>
            <BiRightArrowAlt
              className="h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;

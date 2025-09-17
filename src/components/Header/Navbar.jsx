import { Link } from "react-scroll";
import { navLinks } from "../../data";

const Navbar = () => {
  return (
    <ul className="items-center ring-1 ring-gray-800 px-3 gap-x-0 rounded-full hidden lg:flex">
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link
            to={link.id}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-sm/6 cursor-pointer flex items-center gap-1 py-2 px-4 font-medium relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors text-gray-400 after:bg-white after:transition-opacity text-white after:opacity-100"
            className="text-sm/6 cursor-pointer flex items-center gap-1 py-2 px-4 font-medium relative hover:after:absolute hover:after:-bottom-px hover:after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-200 after:bg-white after:transition-opacity text-gray-400 after:opacity-100"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

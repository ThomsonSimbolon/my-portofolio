import { BiRightArrowAlt } from "react-icons/bi";
import useMobileMenu from "../../hooks/useMobileMenu";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  return (
    <header className="md:backdrop-blur md:border-0 border-b border-gray-800 sticky top-0 z-50 !bg-gray-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
        <div className="flex items-center gap-1.5">
          <a
            href="#home"
            className="cursor-pointer router-link-active router-link-exact-active flex-shrink-0 font-bold text-2xl text-white flex items-end gap-1.5 hover:text-gray-400 transition-colors"
          >
            Thomson
            <span className="txt-greens inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 bg-opacity-10 text-primary-500 text-primary-400 ring-1 ring-inset ring-primary-500 ring-primary-400 ring-opacity-25 mb-0.5">
              Portfolio
            </span>
          </a>
        </div>

        <Navbar />

        <div className="flex items-center justify-end gap-1.5">
          <a
            href="#contact"
            className="hidden txt-greens lg:flex focus:outline-none font-medium rounded-full text-sm gap-x px-3 py-2 hover:bg-gray-800 text-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 bg-primary-50 bg-primary-400 bg-opacity-10 text-primary-500 text-primary-400 ring-1 ring-inset ring-primary-500 hover:ring-0 ring-primary-400 ring-opacity-25"
          >
            Contact Us
            <span>
              <BiRightArrowAlt
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
            </span>
          </a>
          <button
            type="button"
            className="text-white items-center lg:hidden"
            aria-label="Open Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <span className="ri-close-line ri-icon flex-shrink-0 w-5 p-1 h-5 text-2xl"></span>
            ) : (
              <span className="ri-menu-2-fill ri-icon flex-shrink-0 w-5 p-1 h-5 text-2xl"></span>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu
          onItemClick={closeMobileMenu}
          onContactClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;

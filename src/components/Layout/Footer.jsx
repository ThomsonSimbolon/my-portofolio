import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="border-t border-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
          <div className="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
            <a
              href=""
              className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-200 hover:text-white hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-primary-400 inline-flex items-center"
            >
              <span className="iconify i-simple-icons:github flex-shrink-0 h-5 w-5">
                <FaGithub />
              </span>
            </a>
          </div>
          <div className="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"></div>
          <div className="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
            <p className="text-gray-400 text-sm">
              Copyright &copy; 2025 ~ My Portofolio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

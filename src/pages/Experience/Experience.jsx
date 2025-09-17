import { GiDuration } from "react-icons/gi";
import LogoKM from "../../assets/Logo_Kampus_Merdeka.png";
import LogoCGi from "../../assets/logo_CGi.png";

const Experience = () => {
  return (
    <div className="py-12 sm:py-20" id="experience">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
            Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
          <div
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex flex-col items-center justify-center shadow shadow-indigo-700"
          >
            <div className="flex flex-col overflow-hidden rounded-xl divide-y divide-gray-800 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative flex items-center justify-center w-full h-80 sm:h-80 lg:h-96 overflow-hidden rounded-xl">
                <img
                  src={LogoKM}
                  alt="About Image"
                  className="w-full h-full px-4 object-contain"
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-indigo-700"
          >
            <div className="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <img src={LogoCGi} alt="" className="w-16 h-full" />
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl md:text-2xl txt-greens">
                  PT. Cybers Global Indonesia
                </h3>
                <h4 className="text-md font-bold tracking-tight text-white">
                  IT Support & Development
                </h4>
                <p className="text-gray-400 md:text-base text-sm">
                  I am responsible for developing web-based enterprise
                  applications utilizing technologies such as HTML, CSS,
                  Javascript, PHP, CodeIgniter, Bootstrap, jQuery, and MySQL. In
                  this role, I focus on UI/UIX design to create attractive and
                  responsive user interfaces and ensure optimal user experience.
                  In addition, I apply good analytical and problem-solving
                  skills to identify and resolve challenges that arise during
                  the development process. I also have the ability to work
                  effectively, both in a team and independently, with a high
                  commitment to quality and efficiency in every project I work
                  on.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <GiDuration className="w-5 h-5 text-gray-200" />
                  <span className="text-gray-200">
                    Duration: Feb 2023 ~ Jun 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import { IoSchool } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { MdIncompleteCircle } from "react-icons/md";

const Education = () => {
  return (
    <div className="py-12 sm:py-20" id="education">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
            Education
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
          <div
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-indigo-700"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <IoSchool className="text-5xl text-blue-400 hover:text-gray-700 transition-colors" />
                  <h3 className="text-white text-base font-bold">
                    S1 - Universitas Lancang Kuning
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    Completed a bachelor's degree in Informatics Engineering
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <GiDuration className="w-5 h-5 text-gray-200" />
                    <span className="text-gray-200">Duration: 2020 ~ 2024</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MdIncompleteCircle className="w-5 h-5 text-gray-200" />
                    <span className="text-gray-200">Finished</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded
                  flex-1 flex flex-col shadow shadow-indigo-700"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <IoSchool className="text-5xl text-blue-400 hover:text-gray-700 transition-colors" />
                  <h3 className="text-white text-base font-bold">
                    SMK N 1 MANDAU
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    Obtained my vocational high school diploma in Electronics
                    Engineering
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <GiDuration className="w-5 h-5 text-gray-200" />
                    <span className="text-gray-200">Duration: 2016 ~ 2019</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MdIncompleteCircle className="w-5 h-5 text-gray-200" />
                    <span className="text-gray-200">Finished</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded
                  flex-1 flex flex-col shadow shadow-indigo-700"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <IoSchool className="text-5xl text-blue-400 hover:text-gray-700 transition-colors" />
                  <h3 className="text-white text-base font-bold">
                    SMP SWASTA JUDIKA
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    Completed his first school education at Judika Private
                    Junior High School.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <GiDuration className="w-5 h-5 text-gray-200" />
                    <span className="text-gray-200">Duration: 2013 ~ 2016</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MdIncompleteCircle className="w-5 h-5 text-gray-200" />
                    <span className="text-gray-200">Finished</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiPhp, SiCodeigniter, SiMysql, SiSqlite } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="py-12 sm:py-20" id="skills">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <FaHtml5 className="text-5xl text-orange-600 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">HTML</p>
                <div className="text-[15px] text-gray-400 mt-1">
                  HTML is a standardized markup language used to create the
                  structure and basic framework of web pages.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <FaCss3 className="text-5xl text-blue-600 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">CSS</p>
                <div className="text-[15px] text-gray-400 mt-1">
                  CSS is a language used to organize the visual appearance of
                  web pages created with HTML.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <BiLogoJavascript className="text-5xl text-yellow-400 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  Javascript
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  JavaScript is a programming language used to add dynamic and
                  interactive features to web pages.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <SiPhp className="text-5xl text-blue-900 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">PHP</p>
                <div className="text-[15px] text-gray-400 mt-1">
                  PHP is a server-side programming language designed to create
                  dynamic web applications.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <FaJava className="text-5xl text-orange-600 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">Java</p>
                <div className="text-[15px] text-gray-400 mt-1">
                  Java is an object-based programming language (object-oriented)
                  programming language.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <SiCodeigniter className="text-5xl text-orange-600 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  CodeIgniter
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  CodeIgniter is a lightweight and fast PHP framework to help
                  developers create web applications.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <FaReact className="text-5xl text-sky-400 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  ReactJS
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  ReactJS is a JavaScript library for building dynamic and
                  responsive user interfaces (UI).
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <FaReact className="text-5xl text-sky-400 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  React Native
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  React Native is an open-source framework for building
                  cross-platform mobile apps (iOS and Android).
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <AiOutlineCloudServer className="text-5xl text-gray-400 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">API</p>
                <div className="text-[15px] text-gray-400 mt-1">
                  An API is an interface that allows applications to communicate
                  with each other.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <FaGitAlt className="text-5xl text-orange-600 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">GIT</p>
                <div className="text-[15px] text-gray-400 mt-1">
                  GIT is a version control system designed to track changes in a
                  project source code.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <BiLogoTailwindCss className="text-5xl text-sky-500 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  TailwindCSS
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  Tailwind CSS is a utility-first CSS framework for quickly
                  build designs directly in the markup.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <FaBootstrap className="text-5xl text-indigo-600 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  Bootstrap
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  Bootstrap is a framework that provides components for
                  responsive and modern design.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <BiLogoPostgresql className="text-5xl text-blue-400 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  PostgreSQL
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  PostgreSQL is an open-source database management system.
                  open-source relational database management system.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <SiMysql className="text-5xl text-blue-700 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">MySQL</p>
                <div className="text-[15px] text-gray-400 mt-1">
                  MySQL is one of the most popular relational database
                  management systems management system.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <SiSqlite className="text-5xl text-blue-400 hover:text-gray-700 transition-colors" />
                </div>
                <p className="text-white text-base font-bold truncate">
                  SQLite
                </p>
                <div className="text-[15px] text-gray-400 mt-1">
                  SQLite is a lightweight relational database management system,
                  different from other database servers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

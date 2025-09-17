import Logo from "../../assets/logo.png";

const Projects = () => {
  return (
    <div className="py-12 sm:py-20" id="projects">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
          <a
            href="#"
            target="_blank"
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Blog Management System Project"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    Blog Management System
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed a comprehensive blog management system
                    using Laravel and TailwindCSS with admin dashboard and
                    content management features.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="E-Learning Frontend Project"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    E-Learning Frontend
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed a modern e-learning platform frontend using
                    ReactJS and TailwindCSS with interactive course modules and
                    responsive design.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="AI Psychology TEST Project"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    Application AI Psychology
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed an AI-powered psychology application using
                    Node.js and ReactJS with intelligent assessment algorithms
                    and real-time analysis.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Modern Store Project"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    Modern Store
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed a modern e-commerce store using Next.js and
                    TailwindCSS with responsive design.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Open AI Project"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    Open AI Application
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed an AI-powered application using Python with
                    machine learning capabilities and intelligent automation
                    features.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Chatbot AI Project"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">Chatbot AI</h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed an intelligent chatbot application using
                    Python with natural language processing and conversational
                    AI capabilities.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            data-aos="fade-right"
            href="https://github.com/ThomsonSimbolon/Aplikasi-E-Course-Berbasis-Web.git"
            target="_blank"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Project 1"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    E-Course Application
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed various websites using React + ViteJS and
                    React Bootstrap.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/ThomsonSimbolon/kms-application-web.git"
            target="_blank"
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Project 1"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    KMS Application
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed various websites using HTML, CSS,
                    JavaScript, CodeIgniter 4.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/ThomsonSimbolon/Aplikasi-Pengaduan-Masyarakat.git"
            target="_blank"
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Project 1"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    Public Complaint Application
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed various websites using HTML, CSS,
                    JavaScript, PHP, CodeIgniter.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/ThomsonSimbolon/Aplikasi-Movies-Berbasis-Web.git"
            target="_blank"
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Project 1"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    Movies Application
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed various websites using ReactJS and
                    Bootstrap.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href=""
            target="_blank"
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Project 1"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    SIMS Applications
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed various websites using JavaScript,
                    CodeIgniter 4 and JWT.
                    <span className="text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/ThomsonSimbolon/Application-Front-End-GoFinance.git"
            target="_blank"
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
          >
            <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Project 1"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 opacity-50 bg-white transition-opacity" />
              </div>
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div className="mb-2 pointer-events-none">
                  <h3 className="text-white text-base font-bold">
                    Go-Finance Application
                  </h3>
                  <p className="text-[15px] text-gray-400 mt-1">
                    I have developed various websites using React + ViteJS,
                    TailwindCSS and Rest API.
                    <span className="ml-2 text-gray-200">(Github)</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

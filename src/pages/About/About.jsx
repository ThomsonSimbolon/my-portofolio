import Hero2 from "../../assets/my - foto.jpg";

const About = () => {
  return (
    <div className="py-12 sm:py-20" id="about">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
            About
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
          <div
            data-aos="fade-right"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-indigo-700"
          >
            <div className="flex-1 flex overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl md:text-2xl text-white">
                  My Name is Thomson
                </h3>
                <p className="text-gray-400 md:text-base text-sm">
                  I am a graduate of Bachelor of Information Engineering from
                  Lancang Kuning University (2024) with internship experience at
                  PT. Cybers Global Indonesia as IT Support & Development
                  through the Independent Campus program. I have strong skills
                  in the field of Web development | Front-End Developer
                  specializes in the use of technologies such as HTML, CSS,
                  JavaScript, PHP, CodeIgniter, Laravel, ReactJS, Bootstrap,
                  SQL, MySQL, SQLite, API, and GIT, and has an understanding of
                  the concepts of Rest API, React Native. I am committed to
                  continuing to learn and develop in the field of technology,
                  especially in a career as a Web Developer | Front End
                  Developer.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-indigo-700"
          >
            <div className="flex-1 flex overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src={Hero2}
                  alt="About Image"
                  className="w-full h-full object-cover items-center justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

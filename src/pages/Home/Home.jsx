import Typewriter from "typewriter-effect";
import { LiaFileDownloadSolid } from "react-icons/lia";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Hero from "../../assets/Hero.png";

const Home = () => {
  return (
    <div className="py-12 sm:py-24 md:py-30 relative" id="home">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row gap-16 sm:gap-y-24">
        <div className="flex-1 flex md:w-1/2 flex-col">
          <h1 className="font-normal text-white text-2xl mb-5">
            Hi there &#128075;
          </h1>
          <h1 className="font-bold text-3xl text-white mb-5">Thomson</h1>
          <h1 className="font-bold text-3xl md:text-5xl mb-5 text-green-500">
            <Typewriter
              options={{ strings: ["Programmer"], autoStart: true, loop: true }}
            />
          </h1>
          <p className="text-white mb-5 text-balance md:text-justify">
            I am a Programmer dedicated to creating responsive, aesthetically
            pleasing, and functional user experiences. With expertise in modern
            web technologies such as HTML, CSS, JavaScript, and frameworks like
            TailwindCSS, Bootstrap React, Laravel, I have the ability to build
            intuitive and efficient web applications. I am committed to
            continuous learning, keeping up with technology, and providing
            innovative solutions to user needs.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <a
              href=""
              className="ring-1 txt-greens shadow-sm shadow-white transition-colors flex items-center gap-1 justify-center hover:!text-white px-8 py-2 hover:bg-gray-700 bg-slate-900 hover:ring-0 rounded-full"
            >
              <LiaFileDownloadSolid />
              Resume
            </a>
            <a
              href="https://github.com/ThomsonSimbolon"
              target="_blank"
              className="ring-1 hover:ring-0 focus:outline-none shadow-sm shadow-white transition-colors flex items-center gap-2 justify-center px-8 py-2 text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-full"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/thomson-simbolon-8abab9261/"
                target="_blank"
                className="flex txt-greens ring-1 shadow-sm transition-colors shadow-white rounded-full hover:bg-neutral-800 hover:ring-0 p-2 items-center gap-1 text-white hover:text-gray-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100007241866119"
                target="_blank"
                className="flex txt-greens ring-1 shadow-sm transition-colors shadow-white rounded-full hover:bg-neutral-800 hover:ring-0 p-2 items-center gap-1 text-white hover:text-gray-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/0895324803217"
                target="_blank"
                className="flex txt-greens ring-1 shadow-sm transition-colors shadow-white rounded-full hover:bg-neutral-800 hover:ring-0 p-2 items-center gap-1 text-white hover:text-gray-400"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/thomsonsimbolon_/"
                target="_blank"
                className="flex txt-greens ring-1 shadow-sm transition-colors shadow-white rounded-full hover:bg-neutral-800 hover:ring-0 p-2 items-center gap-1 text-white hover:text-gray-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex md:w-1/2 justify-center items-center">
          <div className="relative w-80 md:w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-tl-[100%] rounded-br-[100%]"></div>
            <img
              src={Hero}
              alt="Profile"
              className="relative w-52 lg:w-80 z-10 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

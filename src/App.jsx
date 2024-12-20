import { useState, useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";

import { BiRightArrowAlt } from "react-icons/bi";
import { LiaFileDownloadSolid } from "react-icons/lia";
import {
  FaFacebook,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { MdIncompleteCircle } from "react-icons/md";

import Hero from "./assets/Hero.png";
import Hero2 from "./assets/my - foto.jpg";
import Logo from "./assets/logo.png";
import LogoKM from "./assets/Logo_Kampus_Merdeka.png";
import LogoCGi from "./assets/logo_CGi.png";
import LogoPhone from "./assets/logo_phone.png";
import MyCV from "./assets/My_CV.pdf";

import { navLinks } from "./data";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  // EmailJS
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_plv6rmn", "template_lblo9lr", form.current, {
        publicKey: "FPcg4H06c5n6lTxyg",
      })
      .then(
        () => {
          // Alert jika berhasil menggunakan SweetAlert2
          Swal.fire({
            title: "Success!",
            text: "Your email has been sent successfully.",
            icon: "success",
            draggable: true,
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        },
        (error) => {
          // Alert jika gagal menggunakan SweetAlert2
          Swal.fire({
            title: "Error!",
            text: `Failed to send email: ${error.text}`,
            icon: "error",
            confirmButtonText: "Try Again",
          });
          console.error("FAILED...", error.text); // Debug error di console
        }
      );
  };

  // Fungsi untuk menangani scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="!bg-gray-950">
      {/* Header */}

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

          {/* Navbar */}
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
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
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
                    onClick={toggleMobileMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center border-t border-gray-800 p-4 bg-gray-950">
              <a
                href="#contact"
                onClick={() => {
                  toggleMobileMenu();
                }}
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
        )}
      </header>

      {/* Section Main */}
      <main className="min-h-[calc(100vh-var(--header-height))]">
        <div>
          {/* Section Home */}
          <div className="py-12 sm:py-24 md:py-30 relative" id="home">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row gap-16 sm:gap-y-24">
              {/* Text Column */}
              <div className="flex-1 flex md:w-1/2 flex-col">
                <h1 className="font-normal text-white text-2xl mb-5">
                  Hi there &#128075;
                </h1>
                <h1 className="font-bold text-3xl text-white mb-5">Thomson</h1>
                <h1 className="font-bold text-3xl md:text-5xl mb-5 text-green-500">
                  <Typewriter
                    options={{
                      strings: ["Web Programmer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className="text-white mb-5 text-balance md:text-justify">
                  I am a Web Programmer dedicated to creating responsive,
                  aesthetically pleasing, and functional user experiences. With
                  expertise in modern web technologies such as HTML, CSS,
                  JavaScript, and frameworks like TailwindCSS, Bootstrap React,
                  Laravel, I have the ability to build intuitive and efficient
                  web applications. I am committed to continuous learning,
                  keeping up with technology, and providing innovative solutions
                  to user needs.
                </p>
                <div className="flex flex-col md:flex-row gap-2">
                  <a
                    href={MyCV}
                    target="_blank"
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
                  {/* Logo Social Media */}
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

              {/* Image Column */}
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

          {/* Section About Me */}
          <div className="py-12 sm:py-20" id="about">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
              <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
                  About
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
                {/* Card 1 */}
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
                        I am a graduate of Bachelor of Information Engineering
                        from Lancang Kuning University (2024) with internship
                        experience at PT. Cybers Global Indonesia as IT Support
                        & Development through the Independent Campus program. I
                        have strong skills in the field of Web development |
                        Front-End Developer specializes in the use of
                        technologies such as HTML, CSS, JavaScript, PHP,
                        CodeIgniter, Laravel, ReactJS, Bootstrap, SQL, MySQL,
                        SQLite, API, and GIT, and has an understanding of the
                        concepts of Rest API, React Native. I am committed to
                        continuing to learn and develop in the field of
                        technology, especially in a career as a Web Developer |
                        Front End Developer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 with Responsive Image */}
                <div
                  data-aos="fade-left"
                  className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-indigo-700"
                >
                  <div className="flex-1 flex overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
                    {/* Image Container */}
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

          {/* Section Skills */}
          <div className="py-12 sm:py-20" id="skills">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
              <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
                  Skills
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
                {/* Card 1 */}
                <div
                  data-aos="flip-left"
                  className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow shadow-white"
                >
                  <div className="flex-1 flex flex-col cursor-pointer overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
                    <div className="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                      <div className="mb-2 pointer-events-none">
                        <FaHtml5 className="text-5xl text-orange-600 hover:text-gray-700 transition-colors" />
                      </div>
                      <p className="text-white text-base font-bold truncate">
                        HTML
                      </p>
                      <div className="text-[15px] text-gray-400 mt-1">
                        HTML adalah bahasa markup standar yang digunakan untuk
                        membuat struktur dan kerangka dasar halaman web.
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
                      <p className="text-white text-base font-bold truncate">
                        CSS
                      </p>
                      <div className="text-[15px] text-gray-400 mt-1">
                        CSS adalah bahasa yang digunakan untuk mengatur tampilan
                        visual dari halaman web yang dibuat dengan HTML.
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
                        JavaScript adalah bahasa pemrograman yang digunakan
                        untuk menambahkan fitur dinamis dan interaktif pada
                        halaman web.
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
                      <p className="text-white text-base font-bold truncate">
                        PHP
                      </p>
                      <div className="text-[15px] text-gray-400 mt-1">
                        PHP adalah bahasa pemrograman sisi server yang dirancang
                        untuk membuat aplikasi web dinamis.
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
                      <p className="text-white text-base font-bold truncate">
                        Java
                      </p>
                      <div className="text-[15px] text-gray-400 mt-1">
                        Java adalah bahasa pemrograman berbasis objek
                        (object-oriented) yang dikembangkan oleh Sun
                        Microsystems.
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
                        CodeIgniter adalah framework PHP yang ringan dan cepat
                        untuk membantu pengembang membuat aplikasi web.
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
                        ReactJS adalah library JavaScript untuk membangun
                        antarmuka pengguna (UI) yang dinamis dan responsif.
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
                        React Native adalah framework open-source untuk
                        membangun aplikasi mobile lintas platform (iOS dan
                        Android).
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
                      <p className="text-white text-base font-bold truncate">
                        API
                      </p>
                      <div className="text-[15px] text-gray-400 mt-1">
                        API adalah antarmuka yang memungkinkan aplikasi atau
                        layanan yang berbeda untuk berkomunikasi satu sama lain.
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
                      <p className="text-white text-base font-bold truncate">
                        GIT
                      </p>
                      <div className="text-[15px] text-gray-400 mt-1">
                        GIT adalah sistem kontrol versi yang dirancang untuk
                        melacak perubahan dalam kode sumber proyek secara
                        efisien.
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
                        Tailwind CSS adalah framework CSS utility-first untuk
                        dengan cepat membangun desain langsung di markup.
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
                        Bootstrap adalah framework front-end yang menyediakan
                        komponen untuk membuat desain responsif dan modern.
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
                        PostgreSQL adalah sistem manajemen basis data relasional
                        open-source yang canggih dan dapat diperluas.
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
                      <p className="text-white text-base font-bold truncate">
                        MySQL
                      </p>
                      <div className="text-[15px] text-gray-400 mt-1">
                        MySQL adalah salah satu sistem manajemen basis data
                        relasional yang paling populer digunakan.
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
                        SQLite adalah sistem manajemen basis data relasional
                        yang ringan dan mandiri. Berbeda dengan database server
                        lainnya.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Education */}
          <div className="py-12 sm:py-20" id="education">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
              <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
                  Education
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
                {/* Card 1 */}
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
                          Completed a bachelor&apos;s degree in Informatics
                          Engineering
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <GiDuration className="w-5 h-5 text-gray-200" />
                          <span className="text-gray-200">
                            Duration: 2020 ~ 2024
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <MdIncompleteCircle className="w-5 h-5 text-gray-200" />
                          <span className="text-gray-200">Finished</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
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
                          Obtained my vocational high school diploma in
                          Electronics Engineering
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <GiDuration className="w-5 h-5 text-gray-200" />
                          <span className="text-gray-200">
                            Duration: 2016 ~ 2019
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <MdIncompleteCircle className="w-5 h-5 text-gray-200" />
                          <span className="text-gray-200">Finished</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
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
                          <span className="text-gray-200">
                            Duration: 2013 ~ 2016
                          </span>
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

          {/* Section Projects */}
          <div className="py-12 sm:py-20" id="projects">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
              <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
                  Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
                {/* Card 1 Projects */}
                <a
                  data-aos="fade-left"
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
                          I have developed various websites using React + ViteJS
                          and React Bootstrap.
                          <span className="ml-2 text-gray-200">(Github)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* Card 2 Projects */}
                <a
                  href="https://github.com/ThomsonSimbolon/kms-application-web.git"
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
                {/* Card 3 Projects */}
                <a
                  href="https://github.com/ThomsonSimbolon/Aplikasi-Pengaduan-Masyarakat.git"
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
                {/* Card 4 Projects */}
                <a
                  href="https://github.com/ThomsonSimbolon/Aplikasi-Movies-Berbasis-Web.git"
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
                {/* Card 5 Projects */}
                <a
                  href=""
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
                {/* Card 6 Projects */}
                <a
                  href="https://github.com/ThomsonSimbolon/Application-Front-End-GoFinance.git"
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
                          Go-Finance Application
                        </h3>
                        <p className="text-[15px] text-gray-400 mt-1">
                          I have developed various websites using React +
                          ViteJS, TailwindCSS and Rest API.
                          <span className="ml-2 text-gray-200">(Github)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Section Experience */}
          <div className="py-12 sm:py-20" id="experience">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
              <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
                  Experience
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
                {/* Card 1 */}
                <div
                  data-aos="fade-right"
                  className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex flex-col items-center justify-center shadow shadow-indigo-700"
                >
                  <div className="flex flex-col overflow-hidden rounded-xl divide-y divide-gray-800 hover:bg-opacity-90 transition-[background-opacity]">
                    {/* Image Container */}
                    <div className="relative flex items-center justify-center w-full h-80 sm:h-80 lg:h-96 overflow-hidden rounded-xl">
                      <img
                        src={LogoKM} // Replace with your image URL
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
                        Javascript, PHP, CodeIgniter, Bootstrap, jQuery, and
                        MySQL. In this role, I focus on UI/UIX design to create
                        attractive and responsive user interfaces and ensure
                        optimal user experience. In addition, I apply good
                        analytical and problem-solving skills to identify and
                        resolve challenges that arise during the development
                        process. I also have the ability to work effectively,
                        both in a team and independently, with a high commitment
                        to quality and efficiency in every project I work on.
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

          {/* Section Contact Us */}
          <div className="py-12 sm:py-20" id="contact">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
              <div className="flex flex-col items-center">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
                  Contact Us
                </h2>
              </div>
              <div className="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
                {/* Card 1 */}
                <div
                  data-aos="fade-up"
                  className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex items-center justify-center shadow shadow-indigo-700"
                >
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
                    <div className="flex justify-center items-center my-auto">
                      <div className="p-5 mt-5">
                        <img
                          src={LogoPhone}
                          alt="Project 1"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="gap-x-8gap-y-4 justify-center rounded-xl flex-1 flex flex-col px-2 py-5 sm:p-6">
                      <div className="text-center">
                        <h4 className="text-2xl font-bold uppercase underline text-gray-300">
                          Get In Touch
                        </h4>
                      </div>
                      <div className="mt-5">
                        {/* Form Contact Us */}
                        <form
                          ref={form}
                          className="max-w-2xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg"
                          onSubmit={sendEmail}
                        >
                          <div className="flex flex-col gap-6">
                            {/* Name Input */}
                            <div>
                              <label className="block text-gray-300 text-sm font-bold mb-2">
                                Name
                              </label>
                              <input
                                type="text"
                                name="user_name"
                                className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                required
                              />
                            </div>

                            {/* Email Input */}
                            <div>
                              <label className="block text-gray-300 text-sm font-bold mb-2">
                                Email
                              </label>
                              <input
                                type="email"
                                name="user_email"
                                className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                required
                              />
                            </div>

                            {/* Message Input */}
                            <div className="md:col-span-2">
                              <label className="block text-gray-300 text-sm font-bold mb-2">
                                Message
                              </label>
                              <textarea
                                name="message"
                                rows="4"
                                className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                required
                              ></textarea>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="mt-6 flex justify-end">
                            <input
                              type="submit"
                              value="Send Message"
                              className="px-6 py-2 text-white  hover:bg-slate-500 bg-gray-600 rounded focus:outline-none transition-colors"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Section Footer */}
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
                Copyright &copy; 2024 ~ All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scrool Top */}
      <div className="fixed bottom-5 right-5 transition-all">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-gray-100 bg-opacity-30 backdrop-blur-md backdrop:bg-transparent hover:bg-gray-700 text-white p-3 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-center  hover:bg-opacity-50"
            aria-label="Scroll to top"
          >
            <IoIosArrowUp className="w-5 h-5 items-center justify-center" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;

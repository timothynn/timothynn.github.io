import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import navLogo from "../public/assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "w-full fixed h-20 shadow-xl z-[100] bg-[#11111b]"
          : "w-full fixed h-20 z-[100] bg-[#11111b]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={navLogo} alt="/" width="80" height="15" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/#home"  >
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about"  >
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills"  >
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects"  >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact"  >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/30" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-[#11111b] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={navLogo} width="87" height="35" alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-black  p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets build something cool together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
              <Link href="/#home" containerId="home"  >
                  Home
              </Link>
                </li>

              <Link href="/#about"  >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills"  >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects"  >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact"  >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#f38ba8]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                   <Link href="https://www.linkedin.com/in/timothynn">            
    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
    </Link><Link href="https://twitter.com/im4_tim">
                <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTwitter />
                </div>
    </Link>
    <Link href="https://github.com/timothynn">
                <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>

    </Link>
    <Link href="mailto:timothynn08@gmail.com">
                <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div></Link>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

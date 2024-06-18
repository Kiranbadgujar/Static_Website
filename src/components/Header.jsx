import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      // path: "home",
    },
    {
      link: "About",
      // path: "about",
    },
    {
      link: "Services",
      // path: "services",
    },
    {
      link: "Plan",
      // path: "plan",
    },
    {
      link: "Testimonial",
      // path: "testimonial",
    },
    {
      link: "Contact",
      // path: "contact",
    },
  ];

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-white md:text-4xl text-3xl font-bold font-ubuntu">
        Company<span className="text-limegreen italic">Logo</span>
      </h1>
      <ul className="lg:flex gap-3 justify-center items-center hidden">
        {navItems.map((link, index) => (
          <Link
            key={index}
            className="text-white font-semibold hover:bg-limegreen px-1 py-2 hover:rounded-lg text-[18px]"
            spy={true}
            offset={-100}
            smooth="true"
          >
            {link.link}
          </Link>
        ))}
      </ul>
      <button className="bg-limegreen hover:bg-white text-black px-10 py-3 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden">
        HIRE US
      </button>

      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer" />
          )}
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-black p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map((link,index) =>(
              <Link key={index} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center"  offset={-100} smooth="true">{link.link}
              </Link>
            ))}
        </ul>
      </div>
      </div>

    </nav>
  );
};

export default Header;

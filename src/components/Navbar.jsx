import navLinks from "../constants/data";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    {
      link: "#",
      title: "Home",
    },
    {
      link: "#",
      title: "New",
    },
    {
      link: "#",
      title: "Popular",
    },
    {
      link: "#",
      title: "Trending",
    },
    {
      link: "#",
      title: "Categories",
    },
  ];
  const [toggleNav, setToggleNav] = useState(false);

  function toggle() {
    setToggleNav(!toggleNav);
  }

  return (
    <nav className="flex items-center justify-between padding">
      <img src="/assets/images/logo.svg" alt="logo" />

      <ul className="hidden gap-10 md:flex text-[#00001a]">
        {navLinks.map((i) => (
          <li key={i} className="hover:text-[#f15e50]">
            <a href={`#${i.link}`}>{i.title}</a>
          </li>
        ))}
      </ul>

      {/* START MOBILE NAVIGATION */}
      <div className="block md:hidden">
        <img
          className="relative z-20 cursor-pointer"
          src={
            toggleNav
              ? "/assets/images/icon-menu-close.svg"
              : "/assets/images/icon-menu.svg"
          }
          alt="menu"
          onClick={toggle}
        />
        {toggleNav && (
          <ul className="absolute z-0 right-0 top-0 h-[100%] bg-[#fffdfa] w-[60%] pt-28">
            {navLinks.map((i) => (
              <li
                key={i}
                className="mb-4 ml-8 font-semibold hover:text-[#f15e50] text-[#00001a]"
              >
                <a href={`#${i.link}`}>{i.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* END MOBILE NAVIGATION */}
    </nav>
  );
};

export default Navbar;

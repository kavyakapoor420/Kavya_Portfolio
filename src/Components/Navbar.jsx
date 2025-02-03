import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navbar menu items
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "EDUCATION", link: "#education" },
    { name: "CONTACT ME", link: "#contact" },
    { name: "BLOGS", link: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

// useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const nav = document.querySelector("nav");
//       window.scrollY > 0 ? setSticky(true) : setSticky(false);
//     });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  return (
    <nav className={`fixed w-full left-0 top-0 z-[900] rounded-b-full bg-gradient-to-r  shadow-md shadow-red-400 lg:h-20 h-16 ${sticky ? 'bg-white/60 text-gray-900' : 'text-white'} transition-all`}>
      <div className="flex items-center justify-between px-6 lg:px-12 h-full">
        {/* Logo */}
        <div className="text-2xl lg:text-4xl text-red-600 font-bold uppercase">
          KAVYA_PORTFOLIO
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className={`flex items-center gap-6 text-lg font-medium ${sticky ? 'text-red-500' : 'text-white'}`}>
            {menuLinks.map((menu, indx) => (
              <li key={indx} className="hover:text-cyan-600">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile Popup Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md py-5">
          <ul className="text-lg font-semibold text-gray-900 px-6">
            {menuLinks.map((menu, indx) => (
              <li key={indx} className="py-2 border-b border-gray-300 hover:text-cyan-600">
                <a href={menu.link} onClick={() => setIsOpen(false)}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

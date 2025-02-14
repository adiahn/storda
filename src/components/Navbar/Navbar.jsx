import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Logo from "../../assets/img/logo_small.png";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative px-3 py-2 text-gray-300 transition-colors hover:text-blue-600 group"
  >
    {children}
    <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100" />
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav
      className="w-[100vw] justify-evenly text-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-9xl p-4 ">
        <div className="flex h-16 items-center justify-evenly">
          <a href="/" className="flex items-center justify-between w-auto">
            <img src={Logo} alt="" className="w-10" />
            <h1 className="text-2xl font-bold uppercase tracking-tight text-white">
              Stodar
            </h1>
          </a>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-96 rounded-lg text-black border border-gray-200  py-2 pl-10 pr-4 outline-none "
                aria-label="Search"
              />
            </div>

            <nav className="hidden md:flex md:space-x-1">
              {navigationLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Login
            </button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-white focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`transform transition-all duration-200 ease-in-out md:hidden ${
            isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="space-y-4 pb-4 pt-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-200  pl-10 pr-4 outline-none py-2"
                aria-label="Search"
              />
            </div>

            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

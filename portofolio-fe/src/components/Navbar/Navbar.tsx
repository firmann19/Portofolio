import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "./types";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <nav className="bg-zinc-900 text-slate-100 fixed w-full z-20 top-0 start-0 border-b border-zinc-800 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-indigo-400 font-mono"
        >
          &lt;FR /&gt;
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-8 text-sm font-medium">
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className={`relative group px-2 py-1 transition-all duration-300 ${
                isActive(href)
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full ${
                  isActive(href) ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right actions: CV + hamburger */}
        <div className="flex items-center space-x-3">
          {/* Download CV: always visible */}
          <a
            href="/public/CV_Firman_Ramadhan.pdf"
            download
            className="px-4 py-2 rounded-md bg-zinc-800 border border-indigo-500 text-indigo-400 font-mono text-sm hover:bg-indigo-500 hover:text-white transition"
          >
            Download CV
          </a>

          {/* Hamburger toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-400 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Toggle Menu</span>
            <svg className="w-6 h-6" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="w-full mt-3 md:hidden">
            <ul className="flex flex-col space-y-2 text-sm font-medium">
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className={`block px-4 py-2 rounded-md ${
                      isActive(href)
                        ? "bg-indigo-600 text-white"
                        : "text-slate-300 hover:bg-zinc-800 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

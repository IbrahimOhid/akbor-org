import React from "react";
import { Link } from "react-router-dom";
//pages
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import Services from "../../pages/Services/Services";
import Blog from "../../pages/Blog/Blog";
import Portfolio from "../../pages/Portfolio/Portfolio";

const Navbar = () => {
  return (
    <header className="shadow mb-2">
    <div className="relative flex max-w-screen-xl mx-auto flex-col overflow-hidden px-20 py-4 md:mx-auto md:flex-row md:items-center">
      <a href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
        <span className="mr-2 text-4xl text-blue-600">
        <svg viewBox="0 0 14 14" role="img" focusable="false" width='1em' height='1em' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ff9800" d="M13 5.2V4h-3V1H8.8v3H7.6V1H6.4v3H5.2V1H4v3H1v1.2h3v1.2H1v1.2h3v1.2H1V10h3v3h1.2v-3h1.2v3h1.2v-3h1.2v3H10v-3h3V8.8h-3V7.6h3V6.4h-3V5.2h3z"></path><path fill="#4caf50" d="M2.2 3.4v7.2c0 .66.54 1.2 1.2 1.2h7.2c.66 0 1.2-.54 1.2-1.2V3.4c0-.66-.54-1.2-1.2-1.2H3.4c-.66 0-1.2.54-1.2 1.2z"></path><path fill="#37474f" d="M9.1 9.1H4.9c-.33 0-.6-.27-.6-.6v-3c0-.33.27-.6.6-.6h4.2c.33 0 .6.27.6.6v3c0 .33-.27.6-.6.6z"></path></g></svg>
        </span>
        <span className="text-orange-500">Akbor Org</span>
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label className="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
        <span className="sr-only">Toggle Navigation</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
        <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
          <li className="text-gray-900 uppercase md:mr-12 hover:text-orange-500"><Link to='/' element={<Home/>}>Home</Link></li>
          <li className="text-gray-900 uppercase md:mr-12 hover:text-orange-500"><Link to='/services' element={<Services/>}>Services</Link></li>
          <li className="text-gray-900 uppercase md:mr-12 hover:text-orange-500"><Link to='/blog' element={<Blog/>}>Blog</Link></li>
          <li className="text-gray-900 uppercase md:mr-12 hover:text-orange-500"><Link to='/portfolio' element={<Portfolio/>}>Portfolio</Link></li>
          <li className="text-gray-900 uppercase md:mr-12 hover:text-orange-500"><Link to='/contact' element={<Contact/>}>Contact</Link></li>
        </ul>
      </nav>
    </div>
    </header>    
  );
};

export default Navbar;

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
import Services from "../../pages/Services/Services";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 sm:px-32 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Logo and Description */}
        <div>
        <a href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
        <span className="mr-2 text-4xl text-blue-600">
        <svg viewBox="0 0 14 14" role="img" focusable="false" width='1em' height='1em' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ff9800" d="M13 5.2V4h-3V1H8.8v3H7.6V1H6.4v3H5.2V1H4v3H1v1.2h3v1.2H1v1.2h3v1.2H1V10h3v3h1.2v-3h1.2v3h1.2v-3h1.2v3H10v-3h3V8.8h-3V7.6h3V6.4h-3V5.2h3z"></path><path fill="#4caf50" d="M2.2 3.4v7.2c0 .66.54 1.2 1.2 1.2h7.2c.66 0 1.2-.54 1.2-1.2V3.4c0-.66-.54-1.2-1.2-1.2H3.4c-.66 0-1.2.54-1.2 1.2z"></path><path fill="#37474f" d="M9.1 9.1H4.9c-.33 0-.6-.27-.6-.6v-3c0-.33.27-.6.6-.6h4.2c.33 0 .6.27.6.6v3c0 .33-.27.6-.6.6z"></path></g></svg>
        </span>
        <span className="text-orange-500">Akbor Org</span>
      </a>
          <p className="mt-4 text-base">
            Don’t Be a Stranger, Let’s Achieve Great Things Together...
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-gray-700 hover:bg-orange-500 text-white p-2 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-orange-500 text-white p-2 rounded-full"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-orange-500 text-white p-2 rounded-full"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Page Links */}
        <div className="sm:ml-12">
          <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://instructorium.com/" className="hover:text-orange-500">
                Instructorium
              </a>
            </li>
            <li>
              <a href="https://youtiqa.com/" className="hover:text-orange-500">
                YouTIQA
              </a>
            </li>
            <li>
              <a href="https://akbor.org/affiliate-disclosure/" className="hover:text-orange-500">
                Affiliate Disclosure
              </a>
            </li>
            <li>
              <a href="https://akbor.org/disclaimer/" className="hover:text-orange-500">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="https://akbor.org/privacy-policy/" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://akbor.org/terms-and-conditions/" className="hover:text-orange-500">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>



        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
          <span>R-502, House No. 03, Century Dale, Indira Road, Farmgate, Tejgaon, Dhaka 1215, Bangladesh</span>
          <p className="mt-2">
            <a
              href="https://akbor.org/services/tel:+8809638909192"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <span>+880 96 38 90 91 92</span>
            </a>
          </p>
          <p>
            <a href="http://mailto@inquiry@akbor.org" className="hover:text-orange-500">
              inqury@akbor.org
            </a>
          </p>
        </div>
      </div>

      {/* subscribe section */}
      <div className="mx-auto w-full max-w-7xl">
        {/* Component */}
        <div className=" p-8 text-center ">
          
          {/* Title */}
          <h2 className="mb-4 text-3xl py-2 font-semibold md:text-3xl">
          Stay Updated with Our Weekly Insights
          </h2>
          <div className="mx-auto  flex max-w-lg justify-center">
            <form
              name="email-form"
              method="get"
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
            <input type="text" id="name" name="name" className="w-full bg-white  border border-gray-900 focus:border-orange-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-black" placeholder='Your Name (Required)' required />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-black transition duration-700 ease-in-out rounded text-md uppercase cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          © 2024 Akbor Skills Development Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

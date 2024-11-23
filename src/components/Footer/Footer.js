import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
import Services from "../../pages/Services/Services";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500">Solute</h1>
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
      <div class="flex h-full justify-center items-center">
        <div class="p-6">
          <div
            class="flex flex-wrap justify-around items-center w-full max-w-5xl p-5 mx-auto text-left  rounded lg:flex-nowrap md:p-8">
            <div class="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
              <h3 class="mb-2 text-2xl font-bold text-gray-700 dark:text-gray-200">Stay Updated with Our Weekly Insights</h3>
            </div>
            <div class="w-full px-1 flex-0 md:w-auto lg:w-1/2">
              <form novalidate="">
                <input type="hidden" name="tags" value="earlyaccess" />
                  <div class="flex flex-col sm:flex-row">
                    <input type="email" id="email" name="email" placeholder="Your Email Address" class="flex-1 px-3 py-2 placeholder-gray-300 border rounded-md sm:mr-5 focus:border-orange-500 bg-gray-900 "/>
                      <button type="submit" class="w-full px-6 py-4 mt-5 text-white text-lg bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap dark:bg-gray-900"> Subscribe </button>
                  </div>
              </form>
            </div>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#f3f8f4] pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/Logo-modified.jpg" alt="logo" className="h-16" />
            </Link>
            <p className="text-gray-600 mb-4">
              Natural beauty products made with care for your skin and the
              environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#c19a6b]">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c19a6b]">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c19a6b]">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-[#c19a6b]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#c19a6b]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-[#c19a6b]">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#c19a6b]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#c19a6b]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-[#c19a6b]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={18} className="text-[#c19a6b] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Only online, for now!
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="text-[#c19a6b] mr-2 flex-shrink-0" />
                <span className="text-gray-600">+381 62 335 254</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="text-[#c19a6b] mr-2 flex-shrink-0" />
                <span className="text-gray-600">info@divakozmetika.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Diva Kozmetika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;

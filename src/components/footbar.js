import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Example social icons

const Footbar = () => {
  return (
    <footer className="bg-white rounded-lg shadow mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-center text-sm text-gray-500 sm:text-left">
            <span>© 2023 <a href="/" className="hover:underline">Floop</a>. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footbar;

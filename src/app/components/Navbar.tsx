'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 text-color w-full fixed top-0 z-10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-4xl font-bold">WEBLOG</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-hover  px-3 py-2 rounded-md text-xl font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-hover  px-3 py-2 rounded-md text-xl font-medium">
              About
            </Link>
            <Link href="/blogs" className="hover:text-hover  px-3 py-2 rounded-md text-xl font-medium">
              Blogs
            </Link>
            
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} className='text-color hover:text-hover'/> : <FaBars size={24} className='text-color ' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col bg-gray-100 space-y-4 px-2 pt-2 pb-3 sm:px-3">
            <Link
              href="/"
              className="hover:text-hover  px-3 py-2 rounded-md text-xl "
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-hover px-3 py-2 rounded-md text-xl "
            >
              About
            </Link>
            <Link
              href="blogs"
              className="hover:text-hover px-3 py-2 rounded-md text-xl "
            >
              Blogs
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}

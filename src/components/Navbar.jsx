import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNewTicket = () => {
    toast.info('📝 Create new ticket feature coming soon!');
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">CS — Ticket System</span>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Changing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Download</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
            
            {/* New Ticket Button */}
            <button
              onClick={handleNewTicket}
              className="bg-[#422AD5] text-white px-6 py-2.5 rounded-lg hover:bg-[#351fa8] transition font-medium"
            >
              + New Ticket
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-600 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              // X icon when open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when closed
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition px-2 py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition px-2 py-2">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition px-2 py-2">Changing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition px-2 py-2">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition px-2 py-2">Download</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition px-2 py-2">Contact</a>
              
              {/* New Ticket Button - Mobile */}
              <button
                onClick={handleNewTicket}
                className="bg-[#422AD5] text-white px-6 py-3 rounded-lg hover:bg-[#351fa8] transition font-medium w-full text-left"
              >
                + New Ticket
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
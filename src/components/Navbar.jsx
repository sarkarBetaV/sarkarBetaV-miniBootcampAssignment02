import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNewTicket = () => {
    toast.info('📝 Create new ticket feature coming soon!');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (section) => {
    toast.info(`📌 Navigating to ${section}`);
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
            <button 
              onClick={() => handleNavClick('Home')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('FAQ')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavClick('Changing')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Changing
            </button>
            <button 
              onClick={() => handleNavClick('Blog')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavClick('Download')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Download
            </button>
            <button 
              onClick={() => handleNavClick('Contact')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Contact
            </button>
            
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
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
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
              <button 
                onClick={() => handleNavClick('Home')}
                className="text-gray-600 hover:text-gray-900 transition px-2 py-2 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('FAQ')}
                className="text-gray-600 hover:text-gray-900 transition px-2 py-2 text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavClick('Changing')}
                className="text-gray-600 hover:text-gray-900 transition px-2 py-2 text-left"
              >
                Changing
              </button>
              <button 
                onClick={() => handleNavClick('Blog')}
                className="text-gray-600 hover:text-gray-900 transition px-2 py-2 text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavClick('Download')}
                className="text-gray-600 hover:text-gray-900 transition px-2 py-2 text-left"
              >
                Download
              </button>
              <button 
                onClick={() => handleNavClick('Contact')}
                className="text-gray-600 hover:text-gray-900 transition px-2 py-2 text-left"
              >
                Contact
              </button>
              
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
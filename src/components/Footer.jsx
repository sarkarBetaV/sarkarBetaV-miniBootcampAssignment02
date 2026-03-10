import React from 'react';

const Footer = () => {
  const handleFooterLinkClick = (section) => {
    console.log(`Navigating to ${section}`);
    // You can add toast or actual navigation here
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto py-16">
      <div className="container mx-auto px-4">
        {/* 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: CS — Ticket System with description */}
          <div className="col-span-1">
            <h2 className="text-white font-bold text-lg mb-4">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              CS Ticket System provides comprehensive customer support solutions for businesses of all sizes. 
              Our platform helps you manage, track, and resolve customer tickets efficiently, ensuring 
              exceptional service delivery and customer satisfaction.
            </p>
          </div>
          
          {/* Column 2: Company */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('About Us')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Our Mission')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Our Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Contact Sales')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Contact Sales
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Products & Services')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Products & Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Customer Stories')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Customer Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Download Apps')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Download Apps
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Information */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Privacy Policy')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Terms & Conditions')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Join Us')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 5: Social Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Social Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Twitter')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  @CS_TicketSystem
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Twitter')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  @cs_ticketsupport
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLinkClick('Twitter')}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  @customersupportzone
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = 'mailto:support@csst.com'}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  support@csst.com
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
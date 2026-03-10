import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import ticketsData from './data/tickets.json';

function App() {
  const [availableTickets, setAvailableTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleTicketClick = (ticket) => {
    if (!inProgressTickets.find(t => t.id === ticket.id)) {
      setInProgressTickets([...inProgressTickets, ticket]);
      toast.info(`📌 Ticket "${ticket.title}" added to Task Status`);
    } else {
      toast.warning('⚠️ This ticket is already in progress');
    }
  };

  const handleCompleteTicket = (ticketId) => {
    const completedTicket = inProgressTickets.find(t => t.id === ticketId);
    
    setResolvedTickets([...resolvedTickets, completedTicket]);
    setInProgressTickets(inProgressTickets.filter(t => t.id !== ticketId));
    setAvailableTickets(availableTickets.filter(t => t.id !== ticketId));
    setResolvedCount(resolvedCount + 1);
    
    toast.success(`✅ Ticket #${completedTicket.ticketNumber} resolved!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <Banner 
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedCount}
      />
      
      {/* Main Section */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Customer Tickets */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableTickets.map(ticket => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket}
                  onClick={() => handleTicketClick(ticket)}
                />
              ))}
            </div>
          </div>
          
          {/* Right Side - Task Status */}
          <div className="lg:w-1/3">
            <TaskStatus 
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onComplete={handleCompleteTicket}
            />
          </div>
        </div>
      </div>
      
      <Footer />
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
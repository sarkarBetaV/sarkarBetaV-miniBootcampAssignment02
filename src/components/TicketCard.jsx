import React from 'react';

const TicketCard = ({ ticket, onClick }) => {
  const priorityColors = {
    'HIGH PRIORITY': 'bg-red-100 text-red-800',
    'MEDIUM PRIORITY': 'bg-yellow-100 text-yellow-800',
    'LOW PRIORITY': 'bg-green-100 text-green-800'
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden"
    >
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{ticket.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{ticket.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-500 font-medium">{ticket.ticketNumber}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[ticket.priority]}`}>
            {ticket.priority}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700">{ticket.customer}</span>
          <div className="flex items-center text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {ticket.createdAt}
          </div>
        </div>
        
        {ticket.locked && (
          <div className="mt-3 text-right">
            <span className="text-gray-400">🔒</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
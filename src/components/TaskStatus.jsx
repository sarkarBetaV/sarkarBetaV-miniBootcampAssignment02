import React from 'react';

const TaskStatus = ({ inProgressTickets, resolvedTickets, onComplete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Task Status</h2>
      
      {/* In Progress Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">In Progress</h3>
        {inProgressTickets.length === 0 ? (
          <p className="text-gray-500 text-center py-4 bg-gray-50 rounded-lg">
            Select a ticket to add to task status
          </p>
        ) : (
          <div className="space-y-4">
            {inProgressTickets.map(ticket => (
              <div key={ticket.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">{ticket.title}</h4>
                <button
                  onClick={() => onComplete(ticket.id)}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition font-medium"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Resolved Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Resolved Task</h3>
        {resolvedTickets.length === 0 ? (
          <p className="text-gray-500 text-center py-4 bg-gray-50 rounded-lg">
            No resolved tasks yet
          </p>
        ) : (
          <div className="space-y-2">
            {resolvedTickets.map(ticket => (
              <div key={ticket.id} className="text-gray-600 py-2 border-b border-gray-100 last:border-0">
                {ticket.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
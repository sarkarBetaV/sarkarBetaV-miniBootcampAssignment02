import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* In-Progress Card - Blue Gradient */}
          <div 
            className="flex-1 py-6 px-8 rounded-lg"
            style={{
              background: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)'
            }}
          >
            <div className="text-white text-lg">In-Progress</div>
            <div className="text-white text-5xl font-bold">{inProgressCount}</div>
          </div>
          
          {/* Resolved Card - Green/Blue Gradient */}
          <div 
            className="flex-1 py-6 px-8 rounded-lg"
            style={{
              background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'
            }}
          >
            <div className="text-white text-lg">Resolved</div>
            <div className="text-white text-5xl font-bold">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
import React from 'react';

const Scale = ({ percentage }) => {
  return (
    <div className="h-full w-6 bg-gray-700">
      <div className="h-full w-full bg-gradient-to-t from-green-500 to-red-400">
        <div className="bg-clip-content w-full h-1/2">
        </div>
      </div>
    </div>
  );
};

export default Scale;
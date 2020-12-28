import React from 'react';

const Scale = ({percentage}) => {
  return (
    <div className="h-full w-6 bg-gray-700">
      <div className="h-full w-full bg-gradient-to-t from-green-500 via-yellow-200 to-red-400">
        <div className="bg-clip-content w-full bg-gray-700" style={{height: `${100 - percentage}%`, transition: '0.5s'}}>
        </div>
      </div>
    </div>
  );
};

export default Scale;
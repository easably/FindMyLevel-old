import React from 'react';

const Stats = () => {
  return (
    <div className="flex justify-around flex-col">
      <div className="flex flex-col py-2">
        <span className="text-gray-400">All words</span>
        <span className="text-white text-3xl font-semibold">348</span>
      </div>
      <div className="flex flex-col py-2">
        <span className="text-gray-400 ">Words from “Common thousand”</span>
        <span className="text-white text-3xl font-semibold">308</span>
      </div>
      <div className="flex flex-col py-2">
        <span className="text-gray-400">Words from “Second thousand”</span>
        <span className="text-white text-3xl font-semibold">40</span>
      </div>
    </div>
  );
};

export default Stats;

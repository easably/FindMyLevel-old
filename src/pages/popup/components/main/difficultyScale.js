import React from 'react';
import Scale from "./scale";

const DifficultyScale = () => {
  return (
    <div className="pr-10">
      <div className="h-full flex">
        <div className="w-10 mr-2 flex flex-col justify-around items-center h-full">
          <span className="text-gray-100">C1</span>
          <span className="text-gray-100">B2</span>
          <span className="text-gray-100">B1</span>
          <span className="text-gray-100">A2</span>
          <span className="text-gray-100">A1</span>
        </div>
        <Scale percentage={50}/>
      </div>
    </div>
  );
};

export default DifficultyScale;

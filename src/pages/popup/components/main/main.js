import React from 'react';
import DifficultyScale from './difficultyScale';
import Stats from './stats';
import Header from "./header";

const Main = () => {
  return (
    <div className="py-6 px-4 flex flex-col justify-center">
      <Header/>
      <div className="flex ml-2 h-56">
        <DifficultyScale/>
        <Stats/>
      </div>
    </div>
  );
};

export default  Main;

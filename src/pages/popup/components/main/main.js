import React from 'react';
import DifficultyScale from './difficultyScale';
import Stats from './stats';

const Main = (props) => {
  // Не удалось получить данные

  return (
    <div className="py-6 px-4 flex flex-col justify-center">
      <div className="w-full flex justify-center align-baseline pb-6">
        <span className="text-gray-100 text-lg font-light">Complexity of the article: <span className=" text-green-400 text-xl">Simple</span></span>
      </div>
      <div className="flex ml-2 h-56">
        <DifficultyScale/>
        <Stats/>
      </div>
    </div>
  );
};

export default Main;

import React from 'react';
import YoutubeLogo from '../../../icons/youtubeLogo.svg';
import NetflixLogo from '../../../icons/netflixLogo.svg';
import Popcorn from '../../../icons/popcorn.svg';
import ElangExtensionLogo from '../../../icons/elangExtensionLogo.svg';

const Advertisement = () => {
  return (
    <div className="py-2 px-6 flex bg-grayCool">
      <div className="mr-8 py-2 w-60 flex flex-col items-center justify-start">
        <img className="pb-6 w-32" src={YoutubeLogo} alt="youtube"/>
        <img className="pb-4 w-20" src={NetflixLogo} alt="netflix"/>
        <img className="w-60" src={Popcorn} alt="bucket of popcorn"/>
      </div>
      <div>
        <img className="py-2 w-32 " src={ElangExtensionLogo} alt="E lang Extension"/>
        <div className="mb-10 font-light text-lg text-gray-300 leading-6">Фильмы и сериалы на английском с двойными
          субтитрами
        </div>
        <button
          className="h-10 mb-6 py-2 px-8 rounded-3xl font-semibold tracking-wide bg-green-400 hover:bg-green-300 focus:outline-none">
          Узнать что это!
        </button>
      </div>
    </div>
  );
};

export default Advertisement;

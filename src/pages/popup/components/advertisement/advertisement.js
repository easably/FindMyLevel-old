import React from 'react';
import YoutubeLogo from '../../../../assets/images/youtubeLogo.svg';
import NetflixLogo from '../../../../assets/images/netflixLogo.svg';
import Popcorn from '../../../../assets/images/popcorn.svg';
import ElangExtensionLogo from '../../../../assets/images/elangExtensionLogo.svg';
import strings from "../../../../locales/localisation";
import {connect} from "react-redux";
import * as actions from "../../store/actions";
import {LINK_TO_LANDING} from "../../../../constants/links";

const Advertisement = (props) => {
  const {
    sendAnalyticsEvent
  } = props;

  const handleClickLogo = () => {
    sendAnalyticsEvent(
      'Main PopUp',
      'Logo click',
      LINK_TO_LANDING
    );
    window.open(LINK_TO_LANDING)
  }

  const handleClickLearnMoreBtn = () => {
    sendAnalyticsEvent(
      'Main PopUp',
      'Learn more btn click',
      LINK_TO_LANDING
    );
    window.open(LINK_TO_LANDING)
  }

  return (
    <div className="py-2 px-6 flex bg-grayCool">
      <div className="mr-8 py-2 w-60 flex flex-col items-center justify-start">
        <img className="pb-6 w-32" src={YoutubeLogo} alt="youtube"/>
        <img className="pb-4 w-20" src={NetflixLogo} alt="netflix"/>
        <img className="w-60" src={Popcorn} alt="bucket of popcorn"/>
      </div>
      <div>
        <img onClick={handleClickLogo} className="py-2 w-32 cursor-pointer" src={ElangExtensionLogo}
             alt="E lang Extension"/>
        <div className="mb-10 font-light text-lg text-gray-300 leading-6">{strings.advertisement}
        </div>
        <button
          className="h-10 mb-6 py-2 px-8 rounded-3xl font-semibold tracking-wide bg-green-400 hover:bg-green-300 focus:outline-none"
          onClick={handleClickLearnMoreBtn}
        >
          {strings.learnMore}
        </button>
      </div>
    </div>
  );
};

export default connect(state => state, actions)(Advertisement);

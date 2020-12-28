import React from 'react';
import {connect} from "react-redux";
import * as actions from "../../store/actions";

const Header = (props) => {
  const {grade} = props.text.meta;
  const {loading} = props.text;

  if (loading) {
    return (
      <div className="w-full flex justify-center align-baseline pb-6">
        <span className="mr-10 text-gray-100 text-lg font-light">Complexity of the article: </span>
      </div>
    );
  }

  let textDifficulty = <div></div>;
  if ((grade === 'A1') || (grade === 'A2'))
    textDifficulty = <span className=" text-green-400 text-xl">Simple</span>;

  if ((grade === 'B1') || (grade === 'B2'))
    textDifficulty = <span className=" text-yellow-400 text-xl">Middle</span>;

  if ((grade === 'C1') || (grade === 'C2'))
    textDifficulty = <span className=" text-red-400 text-xl">Difficult</span>;


  return (
    <div className="w-full flex justify-center align-baseline pb-6">
      <span className="text-gray-100 text-lg font-light">Complexity of the article: {textDifficulty}</span>
    </div>
  );
};

export default connect(state => state, actions)(Header);